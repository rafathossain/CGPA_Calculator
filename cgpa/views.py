from django.shortcuts import render


def index(request):
	return render(request, 'cgpa/index.html')


def bangla(request):
	return render(request, 'cgpa/bangla.html')


def english(request):
	return render(request, 'cgpa/english.html')
