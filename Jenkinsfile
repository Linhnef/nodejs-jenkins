pipeline {

   agent any

   stages {
       stage('docker-compose') {
           steps {
              sh "docker-compose up --build"
           }
       }
   }
   post {
      always {
         sh "docker-compose down || true"
      }
   }   
}