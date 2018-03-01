const telegram_nodity = require('telegram-nodity')


const tg = new telegram_nodity({
	method: 'update', // update => run in getUpdates, hook => run in webhook
	api: {
		token: "533658787:AAHVG9Nrxw6VIrsVDlY3EyADCWz7omRUJIs",
		id: "navid_test_bot"
	},
	response: {
		parse_mode: "Markdown"
	},
})

tg.on('message', (request, response) => {
    var user_message = request.getText();
    var user_message_array = user_message.split(" ");
    var isPolite = true;

    if (user_message.trim() == 'چه خبر' || user_message.trim() == 'چه خبر؟' )
    {
        var FeedParser = require('feedparser');
        var request = require('request'); // for fetching the feed
        var req = request('http://aftabnews.ir/fa/rss/7/mostvisited')
        var feedparser = new FeedParser();

        req.on('error', function (error) {
            // handle any request errors
        });

        req.on('response', function (res) {
            var stream = this; // `this` is `req`, which is a stream

            if (res.statusCode !== 200) {
                this.emit('error', new Error('Bad status code'));
            }
            else {
                stream.pipe(feedparser);
            }
        });

        feedparser.on('error', function (error) {
            // always handle errors
        });

        feedparser.on('readable', function () {
            // This is where the action is!
            var stream = this; // `this` is `feedparser`, which is a stream
            var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
            var item;

            while (item = stream.read()) {
                response.reply(item.title, (_err, _res) =>
                    response.end())
               // console.log(item);
            }
        });
    }

    if (user_message.trim() == 'کون پشم') {
        response.reply("کون پشم خودتی  ", (_err, _res) =>
            response.end())
    }
    if (user_message.trim() == 'چیکار میکنی ؟') {
        response.reply("نشستم به کائنات فکر میکنم  ", (_err, _res) =>
            response.end())
    }
    if (user_message.trim() == 'چیکار میکنی؟') {
        response.reply("دارم بال و گردن میزنم  ", (_err, _res) =>
            response.end())
    }
	for (var i = 0, len = user_message_array.length; i < len; i++) {
	 switch(user_message_array[i]) {
   
         case 'کسخل':
         case 'کسخول':
	 case 'کیر':
         response.reply(" آقا اینجا خانواده نشسته لطفا رعایت کنید ", (_err, _res) =>
			 response.end()
		 )
         break;
	 case 'اسکل':
	 case 'اسگل':
	 case 'شاسکول':
         response.reply(" عجبا! ", (_err, _res) =>
			 response.end()
		 )
         break;
     case 'نوید':
         response.reply("نوید مرده مرد " , (_err, _res) =>
			 response.end()
		 )
		 break;
			 
     case 'امید':
	 case 'وحید':
	 case 'حامد':
	 case 'یوگی':
	 case 'پژمان':
         response.reply(" با " + request.getText() + "حال نمیکونم هوهوهو " , (_err, _res) =>
			 response.end()
		 )
		 break;

		 case 'سلام':
		 case 'سامدلیکم':
		 case 'سابیلیک':
         response.reply("سلام دوست من" , (_err, _res) =>
			 response.end()
		 )
         break;
		 case 'متالیکا':
		 case 'metallica':
         response.reply("متالیکا خخدددععع " , (_err, _res) =>
			 response.end()
		 )
		 case 'رامشتین':
		 case 'cranberries':
         response.reply("معععععععععع " , (_err, _res) =>
			 response.end()
		 )
         break;
		 case 'خودافظ':
         response.reply("عزت زیاد " , (_err, _res) =>
			 response.end()
		 )
         break;
         case 'چطوری':
         case 'چطوری؟':
             var rndNumber = Math.floor((Math.random() * 4) + 1);
             switch (rndNumber) {
                 case 1:
                     response.reply("ممل ام ", (_err, _res) =>
                         response.end()
                     )
                     break;
                 case 2:
                     response.reply("جون داداش حال ندارم ", (_err, _res) =>
                         response.end()
                     )
                     break;
                 case 3:
                     response.reply("توپ توپم  ", (_err, _res) =>
                         response.end()
                     )
                     break;
                 case 4:
                     response.reply("به تو چه من چطورم ؟؟؟؟ والا ", (_err, _res) =>
                         response.end()
                     )
                     break;
                 case 4:
                     response.reply("دلم گرفته ", (_err, _res) =>
                         response.end()
                     )
                     break;
                default:
            }
             
        case 'اسپرم':
         response.reply("میدونی یا بگم ؟؟؟؟؟؟ " , (_err, _res) =>
			 response.end()
		 )
		 break;
		 case '666':
         response.reply("تو که از پشم کست قالی کرمون بافتی منم از آب دولم محمود آباد صد تا چنار آب میدم " , (_err, _res) =>
			 response.end()
		 )
		 break;
		 case '999':
         response.reply("یک کلاغ با یه زرافه عروسی می کنه بچشون کلافه می شه " , (_err, _res) =>
			 response.end()
		 )
         break;
		 		 case 'راهنما':
				 case 'help':
         response.reply("میخای فالتو بگیرم ؟ عدد 666 رو بزن اگرم میخای جک بگم عدد 999 و بزن" , (_err, _res) =>
			 response.end()
		 )
         break;
		 case 'بات':
		 case 'bot':
		 case 'هوی':
		 case 'هی':
         response.reply("با منی ؟ " , (_err, _res) =>
			 response.end()
		 )
         break;
         
		 
     // default:
         // response.reply("<<<: " + request.getText(), (_err, _res) =>
			 // response.end()
		 // )
	 }

	}

	//var sql = require("mssql");

 //   // config for your database
 //   var config = {
 //       user: 'sa',
 //       password: 'qazqaz',
 //       server: 'GHARAPANJEH\\SQL2017', 
 //       database: 'nodejs' 
 //   };

    // connect to your database
     // sql.connect(config, function (err) {
    
         // if (err) console.log(err);

        // // // create Request object
         // var request = new sql.Request();
		 // var sqlInsert = "INSERT INTO tbl_test (FullName) VALUES ( " + user_message +" )";
            // request.query(sqlInsert, function (err, recordset) {
            
             // if (err) console.log(err)

            // // // send records as a response
             // //res.send(recordset);
            
         // });
        
     // });
})