variable "repository_url" {
  default = "https://github.com/nljms/aws-trbrp"
}

variable "aws_access_key_id" {
  type = string
}

variable "aws_secret_key" {
  type = string
}

variable "github_token" {
  type = string
}

variable "environment" {
  default = "staging"
}
