variable "bucket_regional_domain_name" {
    description = "regional domain name of the frontend s3 bucket"
    type = string
}

variable "artisanlinkup_frontend" {
    default = "artisanlinkup_frontend"
}

variable "frontend_bucket_arn" {
    type = string
    description = "ARN of the frontend_bucket"
}