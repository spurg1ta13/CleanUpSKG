import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TopBar from "@/components/landing/TopBar";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { blogArticles } from "@/data/blogArticles";

const seoTitles = {
  el: "Blog Καθαρισμού — Συμβουλές & Άρθρα | CleanUp SKG",
  en: "Cleaning Blog — Tips & Articles | CleanUp SKG",
  ru: "Блог об Уборке — Советы и Статьи | CleanUp SKG",
};
const seoDescriptions = {
  el: "Χρήσιμα άρθρα και συμβουλές για βαθύ καθαρισμό σπιτιού, μετακατασκευαστικό καθαρισμό, βιο-καθαρισμό και συντήρηση χώρων στη Θεσσαλονίκη. Διαβάστε περισσότερα στο CleanUp SKG!",
  en: "Useful articles and tips on deep home cleaning, post-construction cleaning, bio-cleaning, and space maintenance in Thessaloniki. Read more at CleanUp SKG!",
  ru: "Полезные статьи и советы по генеральной уборке дома, послестроительной уборке, био-уборке и уходу за помещениями в Салониках. Читайте больше на CleanUp SKG!",
};

const Blog = () => {
  const { lang, t } = useLanguage();

  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoTitles[lang],
    description: seoDescriptions[lang],
    url: "https://cleanupskg.com/blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogArticles.map((article, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://cleanupskg.com/blog/${article.slug}`,
        name: article.title[lang],
      })),
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title={seoTitles[lang]} description={seoDescriptions[lang]} path="/blog" jsonLd={blogListJsonLd} />
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                {t("blog", "heading")}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t("blog", "subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {blogArticles.map((article) => (
                <Card key={article.slug} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <article>
                      <div className="p-6 md:p-8">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={article.date}>
                            {new Date(article.date).toLocaleDateString(
                              lang === "el" ? "el-GR" : lang === "ru" ? "ru-RU" : "en-US",
                              { year: "numeric", month: "long", day: "numeric" }
                            )}
                          </time>
                        </div>
                        <h2 className="text-xl font-bold text-foreground mb-3 leading-tight">
                          {article.title[lang]}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {article.excerpt[lang]}
                        </p>
                        <Link
                          to={`/blog/${article.slug}`}
                          className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
                        >
                          {t("blog", "readMore")} <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </article>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
