variable "bucket_name" {
    default = "artisan_linkup_frontend"
      description = "name of S3 bucket for frontend"
      type = string
}

variable "environment" {
    description = "project environment"
    default = "Production"
    type = string
}

variable "name" {
    description = "project name"
    default = "artisan_linkup_frontend"
    type = string
}

variable "bucket_versioning_status" {
    description = "Bucket versioning status"
    default = "Enabled"

}

variable "frontend_build_path" {
    description = "path to the frontend build output"
    default = "ARTISAN-LINKUP/.next/static"
}