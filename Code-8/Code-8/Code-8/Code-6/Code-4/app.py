from flask import Flask,render_template,request,redirect,url_for,session
from flask_mysqldb import MySQL

app = Flask('__name__')
app.secret_key = 'your-secret-key'

#MySQL Configuration
app.config['MySQL_HOST'] = 'localhost'
app.config['MySQL_USER'] = 'root'
app.config['MySQL_PASSWORD'] = ''
app.config['MySQL_DB'] = 'ad1'

mysql = MySQL(app)

@app.route('/')
def home():
    if 'username' in session:
        return render_template('home.html', username=session['username'])
    else:
        return render_template('home.html')
    
@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['Email']
        pwd = request.form['password']
        cur = mysql.connection.cursor()
        cur.execute(f"select username,email,password from register where username = '{username}' ")
        user = cur.fetchone()
        cur.close()
        if user and pwd == user[1]:
            session['username'] = user[0]
            return redirect(url_for('home'))
        else:
            return render_template('login.html',error='Invalid Username or Password')
        
    return render_template('login.html')

@app.route('/register',methods=['GET','POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['Email']
        pwd = request.form['password']

        cur =mysql.connection.cursor()
        cur.execute(f"INSERT INTO register(Name,Email,password) values('(username)','(email)','(pwd)')")
        mysql.connection.commit()
        cur.close()

        return redirect(url_for(login))
    
    return render_template('register.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)