import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import TopBar from "@/components/landing/TopBar";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { blogArticles } from "@/data/blogArticles";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/blog" replace />;

  const content = article.content[lang];

  // Simple markdown-to-HTML for headings, bold, lists, links, and paragraphs
  const renderMarkdown = (md: string) => {
    const lines = md.split("\n");
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let key = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={key++} className="list-disc pl-6 space-y-2 text-muted-foreground">
            {listItems.map((li, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(li) }} />
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const inlineFormat = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground font-semibold'>$1</strong>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='text-primary underline'>$1</a>");
    };

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        flushList();
        continue;
      }
      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(<h2 key={key++} className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">{trimmed.slice(3)}</h2>);
      } else if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(<h3 key={key++} className="text-xl font-bold text-foreground mt-6 mb-3">{trimmed.slice(4)}</h3>);
      } else if (trimmed.startsWith("- ")) {
        listItems.push(trimmed.slice(2));
      } else if (trimmed === "---") {
        flushList();
        elements.push(<hr key={key++} className="my-8 border-border" />);
      } else {
        flushList();
        elements.push(<p key={key++} className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }} />);
      }
    }
    flushList();
    return elements;
  };

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title[lang],
    description: article.excerpt[lang],
    datePublished: article.date,
    author: { "@type": "Organization", name: "CleanUp Cleaning Services" },
    publisher: { "@type": "Organization", name: "CleanUp Cleaning Services" },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <article className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-primary font-medium text-sm mb-8 hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> {t("blog", "backToBlog")}
              </Link>

              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(
                    lang === "el" ? "el-GR" : lang === "ru" ? "ru-RU" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </time>
              </div>

              <div className="prose-custom">{renderMarkdown(content)}</div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
