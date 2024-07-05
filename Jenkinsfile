pipeline {
  agent any

  stages {
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
      mail to: 'you@example.com',
           subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
           body: "Something went wrong. Please check the build logs."
    }
    always {
      echo 'Pipeline finished.'
    }
  }
}
