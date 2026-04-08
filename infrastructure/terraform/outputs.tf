output "cluster_name" {
  description = "EKS cluster name"
  value       = module.eks.cluster_name
}

output "cluster_endpoint" {
  description = "EKS cluster endpoint"
  value       = module.eks.cluster_endpoint
}

output "ecr_user_service_url" {
  description = "ECR URL for user service"
  value       = aws_ecr_repository.user_service.repository_url
}

output "ecr_product_service_url" {
  description = "ECR URL for product service"
  value       = aws_ecr_repository.product_service.repository_url
}

output "ecr_order_service_url" {
  description = "ECR URL for order service"
  value       = aws_ecr_repository.order_service.repository_url
}

output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}
