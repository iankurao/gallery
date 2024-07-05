pipeline{
    agent any
     tools {  nodejs 'nodejs'  }
    environment {
        MONGO_URI = 'mongodb+srv://iankurao:valley54321@cluster0.mongodb.net/darkroom?retryWrites=true&w=majority'
        SLACK_CHANNEL = 'gallery_ip1' // Specify your Slack channel
        EMAIL_RECIPIENT = 'ian.kurao@student.moringaschool.com'
      }  
    stages{        
         stage('Clone repository') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/iankurao/gallery.git'
            }
        }
          stage('Install Dependencies') {
             steps {
               sh 'npm install'
             }
          }
          stage('install mocha and chai'){
            steps{
                echo 'other dependencies...'
                sh 'npm install --save-dev mocha chai chai-http'
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

 post {
        success {
            slackSend(channel: env.SLACK_CHANNEL, message: "Build ${env.BUILD_NUMBER} succeeded. Check it out at ${env.BUILD_URL}")
        }
        failure {
            slackSend(channel: env.SLACK_CHANNEL, message: "Build ${env.BUILD_NUMBER} failed. Check Jenkins for details.")
            mail to: 'your-email@example.com',
                subject: "Build Failed in Jenkins: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                body: "Build ${env.BUILD_NUMBER} failed. Check Jenkins for details."
        }
    }
}
