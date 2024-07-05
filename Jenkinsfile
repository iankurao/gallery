pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/yourusername/yourrepository.git', branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'node server.js'
            }
        }

        stage('Milestone 2 Change') {
            steps {
                sh 'echo "MILESTONE 2" >> public/index.html'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
