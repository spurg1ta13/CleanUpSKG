DROP POLICY IF EXISTS "Public can submit valid contact forms" ON public.contact_submissions;

CREATE POLICY "Public can submit valid contact forms"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 100
  AND length(btrim(message)) BETWEEN 1 AND 2000
  AND (
    email = ''
    OR (length(btrim(email)) BETWEEN 3 AND 255 AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$')
  )
  AND (
    (length(btrim(email)) BETWEEN 3 AND 255 AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$')
    OR (phone IS NOT NULL AND length(btrim(phone)) BETWEEN 1 AND 30)
  )
  AND (phone IS NULL OR length(btrim(phone)) <= 30)
);