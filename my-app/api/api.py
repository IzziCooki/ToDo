from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
from time import gmtime, strftime
import requests


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
db = SQLAlchemy(app)



class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
 
    #time = db.Column(db.DateTime, nullable)

    def str(self):
        return f'{self.id}, {self.content}'

def todo_serializer(todo):
    return {
        "id": todo.id,
        "content": todo.content
    }

@app.route("/api", methods=["GET"])
def index():
    return jsonify([*map(todo_serializer, Todo.query.all())])

@app.route('/api/create', methods=["POST"])
def create():
    request_data = json.loads(request.data)
    todo = Todo(content=request_data["content"])
    db.session.add(todo)
    db.session.commit()

    return {'201': 'Todo Created Successfully'}

@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(todo_serializer, Todo.query.filter_by(id=id))])

@app.route('/api/delete/<int:id>', methods=["POST"])
def delete(id):
    request_data = json.loads(request.data)
    Todo.query.filter_by(id=request_data["id"]).delete()
    db.session.commit()

    return {"204":"Deleted Successfully"}

@app.route('/api/edit/<int:id>', methods=['POST'])
def edit(id):
    request_data = json.loads(request.data)
    todo = Todo.query.filter_by(id=request_data["id"])
    print(todo.context)
    #todo.content == request_data.content
    #db.session.commit()

@app.route('/api/time')
def get_current_time():
    time = strftime("%a, %d, %b, %Y, %H:%M:%S", gmtime())
    time1 = str(time.split(','))
    time2 = time1.replace("'","")
    return time2




if __name__ == "__main__":
    app.run(debug=True)