-- Create storage bucket for SEO resource PDFs
INSERT INTO storage.buckets (id, name, public)
VALUES ('seo-resources', 'seo-resources', true);

-- Allow public read access to all files in the bucket
CREATE POLICY "Public can read seo resources"
ON storage.objects FOR SELECT
USING (bucket_id = 'seo-resources');

-- Only admins can upload/update/delete files
CREATE POLICY "Admins can upload seo resources"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'seo-resources' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update seo resources"
ON storage.objects FOR UPDATE
USING (bucket_id = 'seo-resources' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete seo resources"
ON storage.objects FOR DELETE
USING (bucket_id = 'seo-resources' AND public.has_role(auth.uid(), 'admin'));