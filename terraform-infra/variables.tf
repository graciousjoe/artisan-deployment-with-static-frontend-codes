variable "aws_region" {
    default = "us-east-1"
}

variable "frontend_build_path" {
     default = "ARTISAN-LINKUP/.next/static"

}
   

variable "project_prefix" {
     default = "artisan-linkup"
  
}

variable "environment"{
    default = "dev"
}

variable "bucket_name" {
    default = "static-frontend" 
}