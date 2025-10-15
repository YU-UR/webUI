from flask import Flask, render_template
from flask import request, jsonify
import utils

app = Flask(__name__)
app.config['DEBUG'] = True


#
# @app.route('/time')
# def get_time():
#     return utils.get_time()
#
#
@app.route('/')
def index0():
    return render_template('index.html')
    # return render_template('1.html')

@app.route('/c1')
def get_c1_data():
    data = utils.get_c1_data()
    return jsonify({"n1":'NO.1 '+data[0][0]+': '+str(data[0][1]),"n2":'NO.2 '+str(data[1][0])+': '+str(data[1][1]),"n3":'NO.3 '+str(data[2][0])+': '+str(data[2][1])})

@app.route('/china_map')
def get_china_map():
    res = []
    for tup in utils.get_china_map():
        res.append({"name":tup[0],"value":float(tup[1])})
    return jsonify({"data":res})



@app.route('/pie_fanzui')
def get_l1_data():
    res,arrestType = [],[]
    for tup in utils.get_l1_data():
        arrestType.append(tup[1])
        res.append({"value": int(tup[0]), "name": tup[1]})
    return jsonify({ "data": res, "arrestType": arrestType })


@app.route('/pie_age')
def get_r1_data():
    res,crimeType = [],[]
    for tup in utils.get_r1_data():
        crimeType.append(tup[1])
        res.append({"value": int(tup[0]), "name": tup[1]})
    print(res)
    print(crimeType)
    return jsonify({ "data": res, "arrestType": crimeType })


@app.route('/bar_data')
def get_r2_data():
    year, a, b, c= [],[],[],[]
    for tup in utils.get_r21_data():
        for i in tup:
            year.append(i)
    # return jsonify({ "year": year })

    for tup in utils.get_r22_data():
        for i in tup:
            a.append(i)
    # return jsonify({ "a": a })

    for tup in utils.get_r23_data():
        for i in tup:
            b.append(i)
    # return jsonify({ "b": b })

    # for tup in utils.get_r24_data():
    #     for i in tup:
    #         c.append(i)
    return jsonify({ "year": year, "a": a , "b": b })


@app.route('/line_time')
def get_r3_data():
    y,q= [],[]
    for tup in utils.get_r21_data():
        for i in tup:
            y.append(i)
    for tup in utils.get_r31_data():
        for i in tup:
            q.append(i)
    return jsonify({ "y": y, "q": q})


@app.route('/scatterplot')
def get_l2_data():
    g, h,w,r,v= [],[],[],[],[]
    for tup in utils.get_l21_data():
        # for i in tup:
            # g.append(i)
            # g1.append(i)
        tup = list(tup)
        g.append(tup)
    # print(g)
    for tup in utils.get_l22_data():
        tup = list(tup)
        h.append(tup)
    # print(h)
    for tup in utils.get_l23_data():
        tup = list(tup)
        w.append(tup)
    # print(w)
    for tup in utils.get_l24_data():
        tup = list(tup)
        r.append(tup)
    # print(r)
    for tup in utils.get_l25_data():
        tup = list(tup)
        v.append(tup)
    # print(v)
    return jsonify({ "g": g, "h": h , "w": w, "r": r,"v": v })


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8000)
    # get_l2_data()