pipeline {
  agent {
    docker {
      image 'node'
    }
    
  }
  stages {
    stage('install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('run unit tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('build for production') {
      steps {
        sh 'npm run build'
      }
    }
  }
}