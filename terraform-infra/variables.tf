variable "aws_region" {
    default = "eu-north-1"
}

variable "frontend_build_path" {
     default = "ARTISAN-LINKUP/.next/static"

}
   

variable "project_prefix" {
     default = "artisan_linkup"
  
}

variable "environment"{
    default = "Production"
}

variable "bucket_name" {
    default = "artisan_linkup_frontend" 
}

variable "bucket_regional_domain_name" {
    description = "regional domain name of the frontend s3 bucket"
    type = string
}