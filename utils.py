import time
import pymysql


# def get_time():
#     time_str = time.strftime("%Y{}%m{}%d{} %X")
#     return time_str.format("年", "月", "日")
#

def get_conn():
    """
    :return:连接，游标
    """
    # 创建连接
    conn = pymysql.connect(
        host="localhost",
        user="root",
        password="Urbee",
        db="world",
        # charset="UTF-8"
    )
    cursor = conn.cursor()  # 执行完毕返回的结果集合默认以元组显示
    return conn, cursor


def close_conn(conn, cursor):
    cursor.close()
    conn.close()


def query(sql, *args):
    """
    封装通用查询
    :param sql:
    :param args:
    :return:返回查询到的结果，（（），（），）的形式
    """

    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res


def get_c1_data():
    """
    :return:返回大屏div id=c1 的数据
    """
    sql = "SELECT province,crimenumber FROM 2020rate ORDER BY crimenumber DESC LIMIT 3"

    # sql = "select sum(confirm)," \
    #       "(select suspect from history oder by ds desc limit 1)," \
    #       "sum(heal)," \
    #       "sum(dead)" \
    #       "from details" \
    #       "where update_time=(select update_time from details order by update_time desc limit 1"
    res = query(sql)
    return res


def get_china_map():
    """
    :return:返回各省的数据
    """
    sql = "	SELECT province,crimenumber/10000 FROM 2020rate ORDER BY crimenumber DESC"
    res = query(sql)
    return res


def get_l1_data():
    sql = "SELECT num/10000,arrestType from arrest2023 ORDER BY num DESC"
    res = query(sql)
    return res


def get_r1_data():
    sql = (
        "SELECT num/10000, crimetype from juvenilecrime where crimetype in ('<18','18-25','>25') and year='2022' ORDER "
        "BY num DESC")
    res = query(sql)
    return res


def get_r21_data():
    sql1 = ("SELECT DISTINCT year from juvenilecrime where year in ('2022','2021','2020','2019','2018') ORDER BY year "
            "ASC")
    res = query(sql1)
    return res


def get_r22_data():
    sql2 = "SELECT num from juvenilecrime  where crimetype ='<18'and year in ('2018','2019','2020','2021','2022') "
    # sql3 = "SELECT num from juvenilecrime  where crimetype ='18-25'and year in ('2022','2021','2020','2019','2018') "
    # sql4 = "SELECT num from juvenilecrime  where crimetype ='>25'and year in ('2022','2021','2020','2019','2018') "
    res2 = query(sql2)
    # res3 = query(sql3)
    # res4 = query(sql4)
    return res2


def get_r23_data():
    sql3 = "SELECT num from juvenilecrime  where crimetype ='18-25'and year in ('2018','2019','2020','2021','2022') "
    res3 = query(sql3)
    return res3


# def get_r24_data():
#     sql4 = "SELECT num from juvenilecrime  where crimetype ='>25'and year in ('2022','2021','2020','2019','2018') "
#     res4 = query(sql4)
#     return res4
def get_r31_data():
    sql = ("SELECT num/10000 from juvenilecrime where crimetype = '刑事罪犯总数'and year in ('2018','2019','2020','2021',"
           "'2022') ORDER BY year")
    res = query(sql)
    return res


def get_l21_data():
    sql = ("SELECT year, crimerate FROM `annualcrimerates`  where province ='北京市' and year in ('2015','2016','2017',"
           "'2018','2019','2020') ORDER BY year asc")
    res = query(sql)
    return res


def get_l22_data():
    sql = ("SELECT year, crimerate FROM `annualcrimerates`  where province ='上海市' and year in ('2015','2016','2017',"
           "'2018','2019','2020') ORDER BY year asc")
    res = query(sql)
    return res


def get_l23_data():
    sql = ("SELECT year, crimerate FROM `annualcrimerates`  where province ='广东省' and year in ('2015','2016','2017',"
           "'2018','2019','2020') ORDER BY year asc")
    res = query(sql)
    return res


def get_l24_data():
    sql = ("SELECT year, crimerate FROM `annualcrimerates`  where province ='江苏省' and year in ('2015','2016','2017',"
           "'2018','2019','2020') ORDER BY year asc")
    res = query(sql)
    return res


def get_l25_data():
    sql = ("SELECT year, crimerate FROM `annualcrimerates`  where province ='浙江省' and year in ('2015','2016','2017',"
           "'2018','2019','2020') ORDER BY year asc")
    res = query(sql)
    return res


def get_r2_data():
    get_r21_data()
    get_r22_data()
    get_r23_data()
    # get_r24_data()


def get_r3_data():
    get_r21_data()
    get_r31_data()


def get_l2_data():
    get_l21_data()
    get_l22_data()
    get_l23_data()
    get_l24_data()
    get_l25_data()


if __name__ == "__main__":
    print(get_l21_data())
    # print(get_l22_data())
    # print(get_l23_data())
    # print(get_l24_data())
    # print(get_l25_data())
    #
    # year = []
    # for tup in get_r21_data():
    #     for i in tup:
    #         year.append(i)
    # print(year)
    # def group_tuple(tup1, group_size):
    #     for i1 in range(0, len(tup1), group_size):
    #         yield tup1[i1: i1 + group_size]
    #
    #
    # year, a, b, c = [], [], [], []
    # for tup in get_r2_data():
    #     for i in tup:
    #         for j in group_tuple(i, 5):
    #             year.append(i)
    #
    # print(year)
