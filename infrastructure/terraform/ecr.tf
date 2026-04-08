resource "aws_ecr_repository" "user_service" {
  name                 = "sneakers-user-service"
  image_tag_mutability = "MUTABLE"

  tags = {
    Project = "sneakers-stride-shop"
  }
}

resource "aws_ecr_repository" "product_service" {
  name                 = "sneakers-product-service"
  image_tag_mutability = "MUTABLE"

  tags = {
    Project = "sneakers-stride-shop"
  }
}

resource "aws_ecr_repository" "order_service" {
  name                 = "sneakers-order-service"
  image_tag_mutability = "MUTABLE"

  tags = {
    Project = "sneakers-stride-shop"
  }
}
