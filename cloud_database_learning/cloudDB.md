# Overview DB

Welcome to my DB folder. where I get to learn about databases and trying to put them on the cloud.
The current files I have right now are a terraform file and a backup to my StarWarsComputerParts file.

## Terraform 
In this code, I’m using Terraform to set up a PostgreSQL database instance on Google Cloud. Here's what's going on:

1. Google Cloud Project Setup:
    - I define the project in Google Cloud as srint1, with the region and zone set to us-central1 and us-central1-a respectively. This specifies where the database instance will be hosted.

2. Creating the PostgreSQL Database Instance:
    - I create a PostgreSQL instance named postgres-instance, using version Postgres 13. The instance has a db-f1-micro tier, which is a low-cost option for smaller workloads. Deletion protection is set to false, so the instance can be deleted without any extra protection measures.

3. Setting Up Databases:
    - Next, I create three PostgreSQL databases on the postgres-instance:

        - postgres-tavarez-development-db for development purposes.
        - postgres-tavarez-int-db for integration testing.
        - postgres-tavarez-qa-db for quality assurance. These databases are all linked to the same PostgreSQL instance.

4. Creating Database Users:
    - Finally, I create three users to access these databases:

        - postgres_dev_user for development.
        - postgres_int_user for integration testing.
        - postgres_qa_user for QA. Each user is given the password "13Cookie$$$$" for authentication.

This setup helps me manage different environments for development, testing, and quality assurance, all within the same PostgreSQL instance on Google Cloud. It's a good approach when you need to separate these stages while keeping everything organized in one place.

I wanted to display that I could set up multiple data bases quikly and eficiantly.

## Star Wars & ComputerParts
I also made a database and put in information you can see it in my video
this is using MSSQL PostgreSQL

[video](https://youtu.be/f-MP_bZq67E)

# Development Environment

I used MSSQL and Google cloud.

first using the basics of C.R.U.D in PostgreSQL I created a database then I made schemas and input data to the database. Using HTTP I could connect to the server on my computer. then with the roles I applied to a login character i can update information and select certain information. 

To create instances and databasesI used Terraform to creat multiple instances then with a back up of the databaseI can upload teh databaseto each instance.

# Useful Websites

* [W3Schools](https://youtu.be/f-MP_bZq67E)
* [DataCamp](https://app.datacamp.com/)
* [Google Cloud](https://www.cloudskillsboost.google/focuses/937?parent=catalog)
* [FireShip](https://www.youtube.com/watch?v=tomUWcQ0P3k)
* [DevOPS Directive](https://www.youtube.com/watch?v=7xngnjfIlK4)