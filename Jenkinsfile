pipeline {
    agent any

    environment {
        // Если необходимо задать дополнительные переменные окружения
    }

    stages {
        stage('Установка зависимостей') {
            steps {
                script {
                    // Выполнение команды внутри контейнера
                    sh 'docker run --rm -v $PWD:/app -w /app node:14 npm i'
                }
            }
        }
        stage('Сборка проекта') {
            steps {
                script {
                    // Выполнение команды внутри контейнера
                    sh 'docker run --rm -v $PWD:/app -w /app node:14 npm run build'
                }
            }
        }
        stage('Артефакт') {
            steps {
                script {
                    // Архивация артефактов
                    archiveArtifacts 'build/**/*'
                    echo 'Артефакт успешно сохранен!'
                }
            }
        }
    }
}
