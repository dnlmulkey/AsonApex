pipeline {
  agent any
  
  environment {
    SFDC_ACCESS = credentials('sfdc-deploy-testqs')
  }
  
  tools {
    ant 'Ant-1.10.1'
  }
  
  stages {
    stage('Validate') {
      steps {
        echo 'Validating..'
        sh 'ant -version'
      }
    }
    stage('Analyze') {
      steps {
        echo 'Analyzing..'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying..'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }
  }
}
