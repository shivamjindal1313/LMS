from django.shortcuts import render

from django.shortcuts import render
from django.http import HttpResponse

import pyrebase

config={
     apiKey: "AIzaSyDHU-dXsF89NpMgHL3e4-sgHEF6WTCL5vw",
  authDomain: "test-e19ae.firebaseapp.com",
  projectId: "test-e19ae",
  storageBucket: "test-e19ae.appspot.com",
  messagingSenderId: "706996641003",
  appId: "1:706996641003:web:f9bb1e0be96992481d32ae",
  measurementId: "G-NLCSF83TKG"
}

#from django.contrib import messages



# Create your views here.

def index(request):
    if request.method == "POST":
        name = request.POST.get('name')  #request.POST is a dict
        number = request.POST.get('phone')
        address= request.POST.get('address')
        language = request.POST.get('language')
        pincode = request.POST.get('pincode')
        print(name,number,address,language,pincode)
         #variables made available for DB insertion and redirected to the page of SUPERLADY

    if request.method == "GET" and request.method.name=="course":
        nameofUser = request.GET.get('name')
        course = request.GET.get('course')

        print(nameofUser,course)
    return render(request,'index.html')

def register(request):
   return render(request,'register.html')

def course(request):
    return render(request,'course.html')

def notifs(request):
    if request.method == "POST":
        print("WRITE CODE HERE")
        ##write the code for making the notifs space :
        #send to all users
    return render(request,'notifs.html')

def progress(request):
    ##we need to extract DB DATA HERE AND THEN PASS IT ON AS FIELDS FOR THE TABLE
    return render(request,'progress.html')