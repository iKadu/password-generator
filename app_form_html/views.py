from django.shortcuts import render, redirect

from django.contrib.auth.forms import UserCreationForm


def index(request):
    return render(request, "index.html")


def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        print(request.POST)
        if form.is_valid():
            form.save()
            return redirect("index")
    else:
        form = UserCreationForm()

    return render(request, "register.html", {"form": form})
    # return render(request, "register.html", {"form": form}, RequestContext(request))


def como_usar(request):
    return render(request, "como-usar.html")


def gerador(request):
    return render(request, "gerador.html")
