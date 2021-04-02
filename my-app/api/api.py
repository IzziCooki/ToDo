from flask import Flask, jsonify, request, json, flash
from flask_sqlalchemy import SQLAlchemy
from time import gmtime, strftime
import requests


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
app.secret_key = "super secret key"
db = SQLAlchemy(app)



class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    #done = db.Column(db.Boolean, nullable=False)
 
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
    if len(*request_data.values()) > 0:
        # * unpacks the data into a clean string
        
        
        #print(list(request_data.values()))
        todo = Todo.query.filter_by(id=id).first()
    
        todo.content =str(*request_data.values())
    #print(todo.content)
        db.session.commit()
        flash('Todo Updated')
        return {'201': 'Todo successfully updated'}
    else:
        return ('No Data in Form')

@app.route('/api/time')
def get_current_time():
    time = strftime("%a, %d, %b, %Y, %H:%M:%S", gmtime())
    time1 = str(time.split(','))
    time2 = time1.replace("'","")
    return time2



@app.route('/api/v2/create', methods=["POST"])
def createV2():
    request_data = json.loads(request.data)
    todo = TodoV2(content=request_data["content"], done=False)
    db.session.add(todo)
    db.session.commit()
    return('Hi')





if __name__ == "__main__":
    app.run(debug=True)


    