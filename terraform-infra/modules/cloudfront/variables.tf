variable "frontend_bucket_arn" {
    type = string
    description = "ARN of the frontend_bucket"
}

variable "bucket_name" {
    default = "static-frontend"
    description = "name of S3 bucket for frontend"
    type = string
}

variable "project_prefix" {
    description = "Prefix for bucket naming"
    type        = string
    default = "artisan-linkup"
  
}

variable "frontend_bucket_website_endpoint" {
   description = "website endpoint of the frontend s3 bucket"
   type = string
}
