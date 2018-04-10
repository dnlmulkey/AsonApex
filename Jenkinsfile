pipeline {
  agent any
  stages {
    stage('Analyze') {
      parallel {
        stage('Analyze') {
          steps {
            sh 'ant analyze'
            pmd(pattern: '**/pmd-analysis.xml')
          }
        }
        stage('Validate') {
          steps {
            sh 'ant deploy'
          }
        }
      }
    }
    stage('Deploy') {
      steps {
        sh 'ant deploy'
      }
    }
  }
}