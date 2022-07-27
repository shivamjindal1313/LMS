from django.shortcuts import render, HttpResponse
from django.urls import resolve
import json
import pyrebase

firebaseConfig = {
  'apiKey': "AIzaSyAaU-u7_7YHCkbJeyrotKvML9EehhNqeXA",
  'authDomain': "srujna-c7f96.firebaseapp.com",
  'databaseURL': "https://srujna-c7f96-default-rtdb.firebaseio.com",
  'projectId': "srujna-c7f96",
  'storageBucket': "srujna-c7f96.appspot.com",
  'messagingSenderId': "1055004078855",
  'appId': "1:1055004078855:web:911a858d931ee452cfcba2",
  'measurementId': "G-1F3H467TPF"
};

times = 0
def register(request):
    global times
    print('Register Page Opened!')
    times += 1
    current_url = request.path
    print(current_url)
    print(0)
    if request.path == '/register/signup/':
        report_loc = '../signup/'
    else: report_loc = 'signup/'
    return render(request, 'register.html', {'loc':report_loc,'error': ''})
def signup(request):
    print('Register Request Made!')
    print('Reading Data from JSON')
    if request.path == '/register/signup/':
        report_loc = '../signup/'
    else: report_loc = 'signup/'
    json2 = open('user_data.json',) 
    data = json.load(json2) 
    l1 = data['u_data'][0]
    emails = list(l1.keys())
    passwords = list(l1.values())
    json2.close() 
    print('Read data from JSON')
    email = request.POST['email']
    password = request.POST['password']
    password1 = request.POST['password1']
    usernames = []
    if email not in emails:
        if password == password1:

            auth.sign_in_with_email_and_password(email,password)
            userID=auth.get_user_by_email(email)

            # send this userID to next page


            # emails.append(email)
            # passwords.append(password)
            # d4 = {emails[len(emails)-1]: passwords[len(emails)-1]}
            # for x in range(len(emails)-1):
            #     d4 = dict(list(d4.items()) + list({emails[x]:passwords[x]}.items()))
            # json_object = '{"u_data": ['+json.dumps(d4, indent = 4)+']}'
            # a = open('user_data.json', 'w')
            # a.write(json_object)
            # ###################################################
            # a.close()
            # times = 0
            # print('Registered new user, returning HTTP response')
            return HttpResponse('You are now registered')
        else:
            print('Passwords do not match, returning HTTP response')
            return render(request, 'register.html', {'loc':report_loc,'errorclass':'alert alert-danger','error': 'Sorry. The Passwords do not match.'})
    else:
        print('The Username or Email ID is already taken, returning HTTP response')
        return render(request, 'register.html', {'loc':report_loc,'errorclass':'alert alert-danger','error': 'Sorry. The Username or Email ID is already taken.'})