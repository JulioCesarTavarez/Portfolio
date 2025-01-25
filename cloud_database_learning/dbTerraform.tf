provider "google" {
    project = "srint1" // name of projectinstance
    region = "us-central1" // region of instance location
    zone = "us-central1-a" //regionzonelocation
} 
 
# defining Postgress instance
resource "google_sql_database_instance" "postgres_instance" {
    name = "postgres-instance"
    database_version = "POSTGRES_13"
    deletion_protection = false
    settings {
        tier = "db-f1-micro"
    }
}
 
 
# PostgreSQL databases
 
# database 1
resource "google_sql_database" "postgres_development" {
    name = "postgres-tavarez-development-db"
    instance = google_sql_database_instance.postgres_instance.name
}
 
# database 2
resource "google_sql_database" "postgres_integrationtest" {
    name = "postgres-tavarez-int-db"
    instance = google_sql_database_instance.postgres_instance.name
}
 
# database 3
resource "google_sql_database" "postgres_qa" {
    name = "postgres-tavarez-qa-db"
    instance = google_sql_database_instance.postgres_instance.name
}
 
 
# postgres users
    # user 1
resource "google_sql_user" "postgres_dev_user"{
    name = "postgres_dev_user"
    instance = google_sql_database_instance.postgres_instance.name
    password = "13Cookie$$$$"
}
    # user 2
resource "google_sql_user" "postgres_int_user"{
    name = "postgres_int_user"
    instance = google_sql_database_instance.postgres_instance.name
    password = "13Cookie$$$$"
}
    # user 3
resource "google_sql_user" "postgres_qa_user"{
    name = "postgres_qa_user"
    instance = google_sql_database_instance.postgres_instance.name
    password = "13Cookie$$$$"
}