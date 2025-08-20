variable "bucket_regional_domain_name" {
    description = "regional domain name of the frontend s3 bucket"
    type = string
}

variable "frontend_bucket_arn" {
    type = string
    description = "ARN of the frontend_bucket"
}

variable "bucket_name" {
    default = "artisan_linkup_frontend"
    description = "name of S3 bucket for frontend"
    type = string
}

variable "project_prefix" {
    description = "Prefix for bucket naming"
    type        = string
    default = "artisan_linkup"
  
}
