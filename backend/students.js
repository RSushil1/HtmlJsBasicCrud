const students = [
{
 "id":1,"first_name":"Dudley","last_name":"Tafani","age":30,"email":"dtafani0@de.vu","phone_number":"370-463-1210","address":"690 Comanche Pass","city":"Maduao","zip_code":"1269","major":"Biology","gpa":0.42,"graduation_date":"7/28/2023","gender":"Male"},
{ 
"id":2,"first_name":"Noni","last_name":"Whipple","age":26,"email":"nwhipple1@abc.net.au","phone_number":"495-588-1817","address":"618 West Drive","city":"Carthage","major":"Psychology","gpa":2.98,"graduation_date":"11/4/2023","gender":"Female"},
{ 
 "id":3,"first_name":"Nerta","last_name":"Wynrehame","age":23,"email":"nwynrehame2@economist.com","phone_number":"755-433-4324","address":"6063 Sunfield Road","city":"Agara","major":"Psychology","gpa":1.82,"graduation_date":"6/1/2022","gender":"Female"},
{ 
 "id":4,"first_name":"Isac","last_name":"Jiggle","age":24,"email":"ijiggle3@odnoklassniki.ru","phone_number":"312-661-6972","address":"704 Sullivan Alley","city":"Chicago","state":"IL","zip_code":"60652","major":"Computer Science","gpa":2.16,"graduation_date":"4/1/2025","gender":"Male"},
{ 
 "id":5,"first_name":"Jeni","last_name":"Tomasi","age":30,"email":"jtomasi4@shinystat.com","phone_number":"518-635-9728","address":"6376 Blaine Trail","city":"Munjul","major":"Biology","gpa":2.87,"graduation_date":"6/20/2023","gender":"Female"},
{ 
 "id":6,"first_name":"Sybille","last_name":"Ault","age":21,"email":"sault5@dedecms.com","phone_number":"580-255-1157","address":"4 Tomscot Court","city":"Kalýves Polygýrou","major":"Psychology","gpa":0.51,"graduation_date":"7/23/2024","gender":"Female"},
{ 
 "id":7,"first_name":"Leeann","last_name":"Blankenship","age":30,"email":"lblankenship6@house.gov","phone_number":"297-798-8004","address":"20751 Riverside Circle","city":"Giade","major":"Psychology","gpa":2.42,"graduation_date":"7/9/2024","gender":"Female"},
{ 
 "id":8,"first_name":"Jana","last_name":"Caudell","age":27,"email":"jcaudell7@google.com.br","phone_number":"474-406-9796","address":"8 Briar Crest Parkway","city":"Minokamo","zip_code":"509-0307","major":"Biology","gpa":2.89,"graduation_date":"8/16/2023","gender":"Genderfluid"},
{ 
 "id":9,"first_name":"Annis","last_name":"Halvosen","age":23,"email":"ahalvosen8@ifeng.com","phone_number":"608-270-6456","address":"0303 American Ash Parkway","city":"Daitou","major":"Biology","gpa":0.1,"graduation_date":"8/10/2024","gender":"Female"},
{ 
 "id":10,"first_name":"Sibeal","last_name":"Aked","age":23,"email":"saked9@skype.com","phone_number":"961-838-0690","address":"2 Golden Leaf Alley","city":"Ust’ye","zip_code":"161140","major":"Computer Science","gpa":0.01,"graduation_date":"10/27/2024","gender":"Agender"},
{ 
 "id":11,"first_name":"Janette","last_name":"Devon","age":24,"email":"jdevona@imdb.com","phone_number":"481-797-2333","address":"81 Alpine Plaza","city":"Wao","zip_code":"9716","major":"Biology","gpa":3.89,"graduation_date":"3/16/2025","gender":"Female"},
{ 
 "id":12,"first_name":"Collette","last_name":"Ballantyne","age":30,"email":"cballantyneb@ameblo.jp","phone_number":"234-277-7339","address":"68172 Towne Road","city":"Shubenka","zip_code":"659410","major":"Biology","gpa":2.15,"graduation_date":"12/31/2024","gender":"Female"},
{ 
 "id":13,"first_name":"Crysta","last_name":"Fontel","age":25,"email":"cfontelc@ucoz.com","phone_number":"614-860-6742","address":"4235 Mandrake Drive","city":"Gammad","zip_code":"3503","major":"Biology","gpa":1.12,"graduation_date":"8/24/2022","gender":"Genderfluid"},
{ 
 "id":14,"first_name":"Herman","last_name":"Lockie","age":26,"email":"hlockied@csmonitor.com","phone_number":"294-653-3641","address":"59169 Lerdahl Pass","city":"Zhenzhushan","major":"Computer Science","gpa":0.21,"graduation_date":"11/18/2022","gender":"Male"},
{ 
 "id":15,"first_name":"Granger","last_name":"Loughrey","age":23,"email":"gloughreye@naver.com","phone_number":"947-709-4764","address":"3164 Memorial Park","city":"Arrepiado","state":"14","zip_code":"2140-605","major":"Psychology","gpa":0.71,"graduation_date":"9/9/2023","gender":"Male"},
{ 
 "id":16,"first_name":"Anders","last_name":"Tuohy","age":25,"email":"atuohyf@xrea.com","phone_number":"919-752-5846","address":"016 Valley Edge Park","city":"Usarin","major":"Psychology","gpa":0.77,"graduation_date":"10/21/2024","gender":"Male"},
{ 
 "id":17,"first_name":"Loree","last_name":"Messingham","age":22,"email":"lmessinghamg@oakley.com","phone_number":"583-395-7848","address":"390 Hintze Place","city":"Zongjia","major":"Computer Science","gpa":2.77,"graduation_date":"12/3/2023","gender":"Female"},
{ 
 "id":18,"first_name":"Garold","last_name":"Waslin","age":30,"email":"gwaslinh@tripod.com","phone_number":"454-810-0654","address":"2 Bartelt Place","city":"Parrita","zip_code":"60901","major":"Computer Science","gpa":2.01,"graduation_date":"1/23/2023","gender":"Male"},
{ 
 "id":19,"first_name":"Laurence","last_name":"Comber","age":21,"email":"lcomberi@de.vu","phone_number":"645-559-9475","address":"6652 Ohio Way","city":"Huaihua","major":"Psychology","gpa":2.63,"graduation_date":"9/26/2023","gender":"Male"},
{ 
 "id":20,"first_name":"Lonny","last_name":"Tantum","age":21,"email":"ltantumj@domainmarket.com","phone_number":"934-159-9953","address":"2122 Gulseth Road","city":"Chatou","major":"Biology","gpa":1.39,"graduation_date":"6/15/2022","gender":"Male"},
{ 
 "id":21,"first_name":"Carey","last_name":"Wrench","age":30,"email":"cwrenchk@hibu.com","phone_number":"811-667-4082","address":"757 Scott Trail","city":"Yunxi","major":"Biology","gpa":2.1,"graduation_date":"11/30/2022","gender":"Male"},
{ 
 "id":22,"first_name":"Myrta","last_name":"Ditzel","age":19,"email":"mditzell@php.net","phone_number":"312-242-3814","address":"07242 Eagan Point","city":"Adtugan","zip_code":"8716","major":"Computer Science","gpa":2.67,"graduation_date":"4/21/2025","gender":"Female"},
{ 
 "id":23,"first_name":"Addy","last_name":"Ney","age":25,"email":"aneym@taobao.com","phone_number":"651-697-4135","address":"5 Roxbury Road","city":"Cibungur","major":"Psychology","gpa":0.45,"graduation_date":"11/3/2024","gender":"Female"},
{ 
 "id":24,"first_name":"Donna","last_name":"Northern","age":25,"email":"dnorthernn@issuu.com","phone_number":"728-793-1925","address":"6273 Melrose Terrace","city":"Gardanne","state":"B8","zip_code":"13548 CEDEX","major":"Computer Science","gpa":2.16,"graduation_date":"9/6/2024","gender":"Female"},
{ 
 "id":25,"first_name":"Daryle","last_name":"Mangeon","age":30,"email":"dmangeono@toplist.cz","phone_number":"491-567-6180","address":"259 Northwestern Avenue","city":"Zbąszynek","zip_code":"66-210","major":"Psychology","gpa":0.61,"graduation_date":"3/10/2024","gender":"Male"},
{ 
 "id":26,"first_name":"Graehme","last_name":"Kinzel","age":24,"email":"gkinzelp@t-online.de","phone_number":"185-684-5338","address":"1 Luster Circle","city":"Maliuzui","major":"Biology","gpa":3.25,"graduation_date":"12/5/2023","gender":"Male"},
{ 
 "id":27,"first_name":"Allyn","last_name":"Keerl","age":27,"email":"akeerlq@nifty.com","phone_number":"156-788-4530","address":"1 Bunting Crossing","city":"Weiyuankou","major":"Biology","gpa":2.05,"graduation_date":"8/13/2024","gender":"Male"},
{ 
 "id":28,"first_name":"Jud","last_name":"Parratt","age":28,"email":"jparrattr@bbc.co.uk","phone_number":"646-246-9514","address":"247 Stephen Parkway","city":"Río","major":"Computer Science","gpa":0.72,"graduation_date":"10/25/2024","gender":"Male"},
{ 
 "id":29,"first_name":"Lanae","last_name":"Felstead","age":28,"email":"lfelsteads@marriott.com","phone_number":"202-504-7384","address":"7475 Jana Place","city":"Washington","state":"DC","zip_code":"20022","major":"Psychology","gpa":2.48,"graduation_date":"12/5/2023","gender":"Female"},
{ 
 "id":30,"first_name":"Fidel","last_name":"Dowbekin","age":27,"email":"fdowbekint@wiley.com","phone_number":"652-504-1191","address":"224 Lawn Alley","city":"Yunxi","major":"Biology","gpa":2.91,"graduation_date":"11/4/2023","gender":"Male"},
{ 
 "id":31,"first_name":"Lowrance","last_name":"Fleote","age":23,"email":"lfleoteu@census.gov","phone_number":"809-679-2109","address":"10372 Village Circle","city":"Bakhmach","major":"Psychology","gpa":1.2,"graduation_date":"12/29/2023","gender":"Agender"},
{ 
 "id":32,"first_name":"Meggy","last_name":"Lyokhin","age":25,"email":"mlyokhinv@msn.com","phone_number":"506-640-4365","address":"95 Veith Point","city":"Fūman","major":"Biology","gpa":3.24,"graduation_date":"3/25/2025","gender":"Female"},
{ 
 "id":33,"first_name":"Arch","last_name":"Warriner","age":24,"email":"awarrinerw@scribd.com","phone_number":"430-392-2395","address":"7 Di Loreto Place","city":"Xiaohe","major":"Computer Science","gpa":2.59,"graduation_date":"5/9/2022","gender":"Male"},
{ 
 "id":34,"first_name":"Ivan","last_name":"Tertre","age":30,"email":"itertrex@github.io","phone_number":"677-359-5962","address":"1634 West Plaza","city":"Obesi","major":"Computer Science","gpa":1.81,"graduation_date":"8/14/2024","gender":"Male"},
{ 
 "id":35,"first_name":"Cora","last_name":"Rapsey","age":23,"email":"crapseyy@house.gov","phone_number":"996-643-1210","address":"51 Mayfield Pass","city":"Sa’erhusong","major":"Computer Science","gpa":3.03,"graduation_date":"10/25/2022","gender":"Female"},
{ 
 "id":36,"first_name":"Hugues","last_name":"Cameron","age":20,"email":"hcameronz@bigcartel.com","phone_number":"760-295-2824","address":"0915 Blue Bill Park Parkway","city":"Nowe Brzesko","zip_code":"32-120","major":"Computer Science","gpa":2.06,"graduation_date":"12/5/2022","gender":"Genderqueer"},
{ 
 "id":37,"first_name":"Odell","last_name":"Lawford","age":29,"email":"olawford10@wikispaces.com","phone_number":"608-216-5594","address":"714 Pawling Crossing","city":"Uptar","zip_code":"685918","major":"Computer Science","gpa":0.05,"graduation_date":"3/9/2023","gender":"Male"},
{ 
 "id":38,"first_name":"Town","last_name":"Trunkfield","age":21,"email":"ttrunkfield11@behance.net","phone_number":"596-155-1136","address":"1 Morningstar Street","city":"Petite Anse","major":"Computer Science","gpa":3.27,"graduation_date":"6/19/2022","gender":"Male"},
{ 
 "id":39,"first_name":"Pegeen","last_name":"Imorts","age":28,"email":"pimorts12@ftc.gov","phone_number":"395-236-7742","address":"9 Shasta Hill","city":"San Vicente","zip_code":"6419","major":"Psychology","gpa":3.73,"graduation_date":"9/18/2022","gender":"Genderfluid"},
{ 
 "id":40,"first_name":"Imogen","last_name":"Akenhead","age":26,"email":"iakenhead13@hatena.ne.jp","phone_number":"521-115-3240","address":"36 Grayhawk Center","city":"Obryte","zip_code":"07-215","major":"Biology","gpa":2.92,"graduation_date":"8/21/2023","gender":"Female"},
{ 
 "id":41,"first_name":"Charmaine","last_name":"Purcell","age":24,"email":"cpurcell14@sun.com","phone_number":"888-669-3207","address":"65 Namekagon Way","city":"Cái Dầu","major":"Psychology","gpa":3.48,"graduation_date":"5/21/2024","gender":"Female"},
{ 
 "id":42,"first_name":"Brendon","last_name":"Dosedale","age":25,"email":"bdosedale15@oaic.gov.au","phone_number":"916-412-0920","address":"0 Brentwood Park","city":"Laiponda","major":"Psychology","gpa":2.7,"graduation_date":"5/26/2022","gender":"Non-binary"},
{ 
 "id":43,"first_name":"Cora","last_name":"Thayre","age":20,"email":"cthayre16@japanpost.jp","phone_number":"237-297-4587","address":"2093 Lindbergh Parkway","city":"Gaoshan","major":"Computer Science","gpa":0.97,"graduation_date":"1/19/2023","gender":"Polygender"},
{ 
 "id":44,"first_name":"Roseline","last_name":"Buckmaster","age":26,"email":"rbuckmaster17@blogtalkradio.com","phone_number":"534-783-9730","address":"73133 Ridgeway Junction","city":"Duwe","major":"Psychology","gpa":0.26,"graduation_date":"6/5/2022","gender":"Female"},
{ 
 "id":45,"first_name":"Derwin","last_name":"Wrotchford","age":22,"email":"dwrotchford18@histats.com","phone_number":"293-295-8002","address":"01 Donald Terrace","city":"Rudong","major":"Biology","gpa":1.58,"graduation_date":"1/13/2024","gender":"Genderfluid"},
{ 
 "id":46,"first_name":"Allayne","last_name":"Meere","age":21,"email":"ameere19@irs.gov","phone_number":"571-876-8458","address":"6 Sunfield Terrace","city":"Duqiao","major":"Biology","gpa":1.27,"graduation_date":"5/9/2023","gender":"Male"},
{ 
 "id":47,"first_name":"Kinna","last_name":"Buxcy","age":24,"email":"kbuxcy1a@gravatar.com","phone_number":"245-970-3268","address":"54397 Luster Crossing","city":"Boshan","major":"Biology","gpa":2.42,"graduation_date":"5/16/2024","gender":"Female"},
{ 
 "id":48,"first_name":"Gunther","last_name":"Fucher","age":23,"email":"gfucher1b@disqus.com","phone_number":"809-362-1920","address":"0 Bunker Hill Alley","city":"Cái Dầu","major":"Biology","gpa":2.28,"graduation_date":"8/2/2024","gender":"Male"},
{ 
 "id":49,"first_name":"Kermy","last_name":"McCague","age":22,"email":"kmccague1c@ask.com","phone_number":"181-712-7763","address":"2464 Spaight Circle","city":"Altamira","major":"Psychology","gpa":3.75,"graduation_date":"8/5/2023","gender":"Male"},
{ 
 "id":50,"first_name":"Halimeda","last_name":"Andrassy","age":27,"email":"handrassy1d@youtube.com","phone_number":"596-805-7547","address":"0334 Badeau Point","city":"Bay Roberts","state":"NL","zip_code":"V3B","major":"Biology","gpa":2.1,"graduation_date":"8/6/2022","gender":"Female"},
]

module.exports = students