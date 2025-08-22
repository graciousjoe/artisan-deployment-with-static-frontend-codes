output "bucket_name" {
  value = aws_s3_bucket.frontend.id
}

output "domain_name" {
   value = aws_s3_bucket.frontend.bucket_regional_domain_name
   description = "Regional domain name of the frontend bucket"
}

output "frontend_bucket_arn" {
   value = aws_s3_bucket.frontend.arn
}

output "project_prefix" {
   value = var.project_prefix 
}

output "frontend_bucket_website_endpoint" {
   description = "website endpoint of the frontend s3 bucket"
   value = aws_s3_bucket.frontend.bucket_regional_domain_name
}
