const rating_text = {
	'sss_p': 'SSS+',
	'sss': 'SSS',
	'ss_p': 'SS+',
	'ss': 'SS',
	's_p': 'S+',
	's': 'S',
	'aaa_p': 'AAA+',
	'aaa': 'AAA',
	'aa_p': 'AA+',
	'aa': 'AA',
	'a_p': 'A+',
	'a': 'A',
	'b': 'B',
	'c': 'C',
	'd': 'D',
	'f': 'F',
};
const plate_text = {
	'pg': 'PERFECT GAME',
	'ug': 'ULTIMATE GAME',
	'eg': 'EXTREME GAME',
	'sg': 'SUPERB GAME',
	'mg': 'MARVELOUS GAME',
	'tg': 'TALENTED GAME',
	'fg': 'FAIR GAME',
	'rg': 'ROUGH GAME'
};
const expert_titles = [
	{
		name: 'THE MASTER',
		description: '[Lv.28] 1,900 rating',
		tier: 'platinum',
		type: 'rating',
		level: '28',
		rating: '1900'
	},
	{
		name: 'EXPERT Lv.10',
		description: '[Lv.27] 7,000 rating',
		tier: 'platinum',
		type: 'rating',
		level: '27',
		rating: '7000'
	},
	{
		name: 'EXPERT Lv.9',
		description: '[Lv.27] 3,500 rating',
		tier: 'gold',
		type: 'rating',
		level: '27',
		rating: '3500'
	},
	{
		name: 'EXPERT Lv.8',
		description: '[Lv.26] 26,000 rating',
		tier: 'gold',
		type: 'rating',
		level: '26',
		rating: '26000'
	},
	{
		name: 'EXPERT Lv.7',
		description: '[Lv.26] 13,000 rating',
		tier: 'gold',
		type: 'rating',
		level: '26',
		rating: '13000'
	},
	{
		name: 'EXPERT Lv.6',
		description: '[Lv.25] 40,000 rating',
		tier: 'gold',
		type: 'rating',
		level: '25',
		rating: '40000'
	},
	{
		name: 'EXPERT Lv.5',
		description: '[Lv.25] 20,000 rating',
		tier: 'gold',
		type: 'rating',
		level: '25',
		rating: '20000'
	},
	{
		name: 'EXPERT Lv.4',
		description: '[Lv.24] 60,000 rating',
		tier: 'gold',
		type: 'rating',
		level: '24',
		rating: '60000'
	},
	{
		name: 'EXPERT Lv.3',
		description: '[Lv.24] 30,000 rating',
		tier: 'gold',
		type: 'rating',
		level: '24',
		rating: '30000'
	},
	{
		name: 'EXPERT Lv.2',
		description: '[Lv.23] 80,000 rating',
		tier: 'gold',
		type: 'rating',
		level: '23',
		rating: '80000'
	},
	{
		name: 'EXPERT Lv.1',
		description: '[Lv.23] 40,000 rating',
		tier: 'gold',
		type: 'rating',
		level: '23',
		rating: '40000'
	},
	{
		name: 'ADVANCED Lv.10',
		description: '[Lv.22] 70,000 rating',
		tier: 'silver',
		type: 'rating',
		level: '22',
		rating: '70000'
	},
	{
		name: 'ADVANCED Lv.9',
		description: '[Lv.22] 52,500 rating',
		tier: 'silver',
		type: 'rating',
		level: '22',
		rating: '52500'
	},
	{
		name: 'ADVANCED Lv.8',
		description: '[Lv.22] 35,000 rating',
		tier: 'silver',
		type: 'rating',
		level: '22',
		rating: '35000'
	},
	{
		name: 'ADVANCED Lv.7',
		description: '[Lv.22] 17,500 rating',
		tier: 'silver',
		type: 'rating',
		level: '22',
		rating: '17500'
	},
	{
		name: 'ADVANCED Lv.6',
		description: '[Lv.21] 35,000 rating',
		tier: 'silver',
		type: 'rating',
		level: '21',
		rating: '35000'
	},
	{
		name: 'ADVANCED Lv.5',
		description: '[Lv.21] 30,000 rating',
		tier: 'silver',
		type: 'rating',
		level: '21',
		rating: '30000'
	},
	{
		name: 'ADVANCED Lv.4',
		description: '[Lv.21] 15,000 rating',
		tier: 'silver',
		type: 'rating',
		level: '21',
		rating: '15000'
	},
	{
		name: 'ADVANCED Lv.3',
		description: '[Lv.20] 39,000 rating',
		tier: 'silver',
		type: 'rating',
		level: '20',
		rating: '39000'
	},
	{
		name: 'ADVANCED Lv.2',
		description: '[Lv.20] 26,000 rating',
		tier: 'silver',
		type: 'rating',
		level: '20',
		rating: '26000'
	},
	{
		name: 'ADVANCED Lv.1',
		description: '[Lv.20] 13,000 rating',
		tier: 'silver',
		type: 'rating',
		level: '20',
		rating: '13000'
	},
	{
		name: 'INTERMEDIATE Lv.10',
		description: '[Lv.19] 11,000 rating',
		tier: 'bronze',
		type: 'rating',
		level: '19',
		rating: '11000'
	},
	{
		name: 'INTERMEDIATE Lv.9',
		description: '[Lv.18] 9,200 rating',
		tier: 'bronze',
		type: 'rating',
		level: '18',
		rating: '9200'
	},
	{
		name: 'INTERMEDIATE Lv.8',
		description: '[Lv.17] 7,600 rating',
		tier: 'bronze',
		type: 'rating',
		level: '17',
		rating: '7600'
	},
	{
		name: 'INTERMEDIATE Lv.7',
		description: '[Lv.16] 6,200 rating',
		tier: 'bronze',
		type: 'rating',
		level: '16',
		rating: '6200'
	},
	{
		name: 'INTERMEDIATE Lv.6',
		description: '[Lv.15] 5,000 rating',
		tier: 'bronze',
		type: 'rating',
		level: '15',
		rating: '5000'
	},
	{
		name: 'INTERMEDIATE Lv.5',
		description: '[Lv.14] 4,000 rating',
		tier: 'bronze',
		type: 'rating',
		level: '14',
		rating: '4000'
	},
	{
		name: 'INTERMEDIATE Lv.4',
		description: '[Lv.13] 3,200 rating',
		tier: 'bronze',
		type: 'rating',
		level: '13',
		rating: '3200'
	},
	{
		name: 'INTERMEDIATE Lv.3',
		description: '[Lv.12] 2,600 rating',
		tier: 'bronze',
		type: 'rating',
		level: '12',
		rating: '2600'
	},
	{
		name: 'INTERMEDIATE Lv.2',
		description: '[Lv.11] 2,200 rating',
		tier: 'bronze',
		type: 'rating',
		level: '11',
		rating: '2200'
	},
	{
		name: 'INTERMEDIATE Lv.1',
		description: '[Lv.10] 2,000 rating',
		tier: 'bronze',
		type: 'rating',
		level: '10',
		rating: '2000'
	},
];

fetchAllScores();
	
function fetchAllScores() {
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css') );	
	$('#contents').css('background', '#1a1b1e');
	let pages = parseInt($('.board_paging button:last').attr('onclick').split('=')[2].split('\'')[0]);
	showProgress(pages);
	let scores = [];
	let current_url = window.location.href;	

	if(window.location.href.indexOf('?') == -1) {
		current_url = current_url + '?';
	}

	let mark = 1;
	for (var i = 1; i <= pages; i++) {
		fetchScores(current_url + '&&page=' + i)
			.then((score) => {
				console.log(mark + '/' + pages);
				$('#current_progress_page').html(mark);
				$('#fetch_progress_bar').css('width', ((mark/pages)*100) + '%');
				for (var j = score.length - 1; j >= 0; j--) {
					scores.push(score[j])
				}
				if(mark == pages) {
					$('#progress_pane').hide();
					run(scores)
				}
				mark++;
			});
	}
}


function run(scores) {
	scores.sort(function(a, b){
	    var a1 = a.rating, b1 = b.rating;
	    if(a1 == b1) {
	    	var a2 = a.score, b2 = b.score;
		    if(a2 == b2) {			    	
		    	return 0;
		    }	
	    	return a2 > b2 ? -1 : 1;
	    }
	    return a1 > b1 ? -1 : 1;
	});

	createAnalytic(scores);
}

function showProgress(page) {
	$('.pageWrap').prepend('<div id="progress_pane"><h1 style="color:white">Fetching scores:</h1><div id="fetch_progress" class="progress" style="height: 30px;"></div>');
	$('#fetch_progress').append('<div id="fetch_progress_bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" ' +
		'aria-valuenow="0" aria-valuemin="0" aria-valuemax="' + page + '" style="width: 0%">'+
		'<div style="position: absolute; text-align: center; line-height: 20px; overflow: hidden; color: black; right: 0; left: 0; top: 0;">'+
		'<span style="font-size: 20px;"><span id="current_progress_page">0</span>/' + page + '</span></div></div>');
}

function createAnalytic(scores) {
	console.log("Run Analytics");
	
	$('.pageWrap').prepend('<div id="table_pane" class="row"><div id="table_pane_body" class="col-md-6"><table id="main_table" class="table table-dark table-striped"></table></div></div>');
	$('#main_table').append('<thead class="thead-dark"><tr><th width="30">#</th><th>Song</th><th width="100">Diff</th><th width="100">Score</th><th width="50">Rank</th><th width="70">Rating</th></tr></thead>');		
	$('#main_table').css('');
	$('#main_table').append('<tbody id="main_table_body"><tbody>');

	for (var i = 0; i < scores.length; i++) {
		$('#main_table_body').append('<tr>' +
			'<td>' + (i+1) + '</td>' +
			'<td>' + scores[i].name + '</td>' +
			'<td>' + scores[i].level_text + '</td>' +
			'<td>' + scores[i].score_text + '</td>' +
			'<td>' + scores[i].score_rate_text + '</td>' +
			'<td>' + scores[i].rating + '</td>');		
	}


	$('#table_pane').append('<div id="table_pane_progress" class="col-md-6"><table id="progress_table" class="table table-dark table-striped"></table></div>');
	$('#progress_table').append('<thead class="thead-dark"><tr><th width="170">Title</th><th width="180">Description</th><th>Progress</th></tr></thead>');
	$('#progress_table').append('<tbody id="progress_table_body"><tbody>');

	var level_progress = [];
	var level_progress_list = [];
	var score_progress = scores;
	score_progress.reduce(function(res, value) {
		if (!res[value.level]) {
		    res[value.level] = { diff: value.level, rating: 0 };
		    level_progress_list.push(res[value.level])
		}
		res[value.level].rating += parseInt(value.rating);
		return res;
	}, {});
	for (var i = 0; i < level_progress_list.length; i++) {
		level_progress[level_progress_list[i].diff] = level_progress_list[i].rating;
	}


	for (var i = 0; i < expert_titles.length; i++) {
		switch(expert_titles[i].type) {
		  	case 'rating':
		  		current_level = expert_titles[i].level;
		  		current_rating = level_progress[current_level] ? level_progress[current_level] : 0;
		  		max_rating = parseInt(expert_titles[i].rating);
		  		progress = Math.round((current_rating / max_rating) * 100);
		  		$('#progress_table_body').append('<tr>' +
					'<td>' + expert_titles[i].name + '</td>' +
					'<td>' + expert_titles[i].description + '</td>' +
					'<td><div class="progress" style="position: relative;">' +
						'<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"' +
							'aria-valuenow="' + current_rating + '" aria-valuemin="0" aria-valuemax="' + max_rating + '" style="width: ' + progress + '%"></div>' +
						'<div style="position: absolute; text-align: center; line-height: 20px; overflow: hidden; color: black; right: 0; left: 0; top: 0;">' + current_rating.toLocaleString() + '/' + max_rating.toLocaleString() + '</div>' +
					'</div></td>');	
			    break;
		  	default:
		    	continue;		    	
		}		
	}
}

async function fetchScores(url) {
	dom = await fetchPage(url);
	const rows = dom.querySelectorAll('.my_best_scoreList .in');
	songs = [];
	for (var i = 0; i < rows.length; i++) {
		song = $(dom.querySelectorAll('.my_best_scoreList .in .song_name p')[i]).html();
		score = $(dom.querySelectorAll('.my_best_scoreList .in .num')[i]).html();
		score_rate = $(dom.querySelectorAll('.my_best_scoreList .in .etc_con .img:not(.st1) img')[i]).attr('src');
		score_rate = score_rate.split('/grade/')[1].split('.png')[0];

		score_plate = $(dom.querySelectorAll('.my_best_scoreList .in .etc_con .st1 img')[i]).attr('src');
		score_plate = score_plate.split('/plate/')[1].split('.png')[0];

		level_type_data = $(dom.querySelectorAll('.my_best_scoreList .in .stepBall_in')[i]).attr('style').split('full/')[1].split('_bg')[0];
		switch(level_type_data) {
		  	case 's':
			    level_type = 'single';
			    break;
		  	case 'd':
			    level_type = 'double';
			    break;
		  	default:
		    	level_type = 'coop';
		}

		level = '';
		levels = $(dom.querySelectorAll('.my_best_scoreList .in .stepBall_in')[0]).find('.imG');

		switch(level_type_data) {
			case 's':
			case 'd':
				for (var j = 0; j < levels.length; j++) {
					url = $(dom.querySelectorAll('.my_best_scoreList .in .stepBall_in')[i]).find('.imG img').eq(j).attr('src');
					level += url.split('num_')[1].split('.png')[0];
				}
				rating = calculateRating(level, rating_text[score_rate]);
				level_text = level_type_data + level;
				level_text = level_text.toUpperCase();
				break;
		 	default:
			    url = $(dom.querySelectorAll('.my_best_scoreList .in .stepBall_in')[i]).find('.imG img').eq(1).attr('src');
				level = url.split('num_')[1].split('.png')[0];
				rating = 0;
				level_text = 'CO-OP X' + level;
		}						

		song = {
    		name: song,
    		level_text: level_text,
    		score_text: score,
    		score_rate_text: rating_text[score_rate],
    		rating: rating,
    		score_plate_text: plate_text[score_plate],
    		level_type: level_type,
    		level: level,
    		score: score.replace(',',''),
    		score_rate: score_rate,
    		score_plate: score_plate,
    	}

    	songs.push(song);
	}

	songs.sort(function(a, b){
	    var a1 = a.rating, b1 = b.rating;
	    if(a1 == b1) {
	    	var a2 = a.score, b2 = b.score;
		    if(a2 == b2) {			    	
		    	return 0;
		    }	
	    	return a2 > b2 ? -1 : 1;
	    }
	    return a1 > b1 ? -1 : 1;
	});

	return songs;
}

async function fetchPage(url) {
	const response = await fetch(url, {redirect: 'error'});
	const html = await response.text();
	const parser = new DOMParser();
	return parser.parseFromString(html, 'text/html');
}

function calculateRating(level, rate) {
	rate_index = {
		'A':0.9,
		'A+':0.95,
		'AA':1,
		'AA+':1.05,
		'AAA':1.1,
		'AAA+':1.15,
		'S':1.2,
		'S+':1.26,
		'SS':1.32,
		'SS+':1.38,
		'SSS':1.44,
		'SSS+':1.5,
	};

	level_base = {
		'10':100,
		'11':110,
		'12':130,
		'13':160,
		'14':200,
		'15':250,
		'16':310,
		'17':380,
		'18':460,
		'19':550,
		'20':650,
		'21':760,
		'22':880,
		'23':1010,
		'24':1150,
		'25':1300,
		'26':1460,
		'27':1630,
		'28':1810,
	};

	rating = parseInt(level_base[level]) * parseFloat(rate_index[rate]);
	return Math.round(rating.toFixed(2));
}
