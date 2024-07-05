pipeline{
    agent any
     tools {  nodejs 'nodejs'  }
    stages{        
         stage('Checkout Master branch'){
            steps{
                checkout scm:[$class:'GitSCM', branches:[[name: '*/master']], userRemoteConfigs:'git-cridentials']
       
            }
           }

          stage('Install Dependencies') {
             steps {
               sh 'npm install'
             }
          }
          stage('Run Tests') {
            steps {
              sh 'npm test'
             }
          }
         stage('Deploy to Render') {
           steps {
              sh 'node server.js'
             }
          }
     }

  post {
    failure {
      mail to: 'ian.kurao@student.moringaschool.com',
           subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
           body: "Something went wrong. Please check the build logs."
    }
    always {
      echo 'Pipeline finished.'
    }
  }
}
