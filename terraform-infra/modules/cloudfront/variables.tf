variable "bucket_regional_domain_name" {
    description = "regional domain name of the frontend s3 bucket"
    type = string
}

variable "frontend_bucket_arn" {
    type = string
    description = "ARN of the frontend_bucket"
}


variable "bucket_name" {
    type = string
}

variable "project_prefix" {
    type = string
}

