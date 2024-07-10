FROM python:3.10.12

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app

COPY requirements.txt /app/requirements.txt
RUN pip3 install -r requirements.txt

COPY deployment/* /app/deployment/*
RUN sed -i 's/\r$//g' /app/deployment/*
RUN chmod +x /app/deployment/*

ENTRYPOINT ["/app/deployment/entrypoint"]