pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Install dependencies') {
      steps {
        sh 'yarn'
      }
    }
    
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
     
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }  
    
    stage('Deploy'){
       steps {
        sh 'pm2 restart ecosystem.config.js'
      } 
    }

  }
}