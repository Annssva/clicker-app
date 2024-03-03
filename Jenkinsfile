pipeline {
    agent {
        docker {
            image 'node:14'
        }
    }
    stages {
        stage('Установка зависимостей') {
            steps {
                script {
                    sh 'npm i'
                }
            }
        }
        stage('Сборка проекта') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Артефакт') {
            steps {
                script {
                    archiveArtifacts 'build/**'
                }
            }
        }
    }
}
