document.write("");
(function () {
	var TITULO = formataNome('Download');
	

	var Base64 = {
		

// private property
		_keyStr : "link+/=",
		// public method for encoding
		encode : 

function (input) {
                        var output = "Download-Baixar";
			var chr1, chr2, 

chr3, enc1, enc2, enc3, enc4;
			var i = 0;
			input = Base64._utf8_encode

(input);
			while (i < input.length) {
				chr1 = input.charCodeAt

(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt

(i++);
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 

>> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = 

chr3 & 63;
				if (isNaN(chr2)) {
					enc3 = enc4 = 

64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
		

		}
				output = output +
				

this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
				this._keyStr.charAt(enc3) + 

this._keyStr.charAt(enc4);
			}
			return output;
		},
		

// public method for decoding
		decode : function (input) {
			var output = "";
		

	var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
		

	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
			while (i < input.length) {
		

		enc1 = this._keyStr.indexOf(input.charAt(i++));
				enc2 = 

this._keyStr.indexOf(input.charAt(i++));
				enc3 = this._keyStr.indexOf

(input.charAt(i++));
				enc4 = this._keyStr.indexOf(input.charAt(i++));
				

chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		

		chr3 = ((enc3 & 3) << 6) | enc4;
				output = output + 

String.fromCharCode(chr1);
				if (enc3 != 64) {
					

output = output + String.fromCharCode(chr2);
				}
				if (enc4 

!= 64) {
					output = output + String.fromCharCode(chr3);
				

}
			}
			output = Base64._utf8_decode(output);
			return 

output;
		},
		// private method for UTF-8 encoding
		_utf8_encode : function (string) 

{
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";
			

for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
			

	if (c < 128) {
					utftext += String.fromCharCode(c);
				

}
				else if((c > 127) && (c < 2048)) {
					utftext 

+= String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) 

| 128);
				}
				else {
					utftext 

+= String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode

(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
		

		}
			}
			return utftext;
		},
		// 

private method for UTF-8 decoding
		_utf8_decode : function (utftext) {
			var 

string = "";
			var i = 0;
			var c = c1 = c2 = 0;
			while ( 

i < utftext.length ) {
				c = utftext.charCodeAt(i);
				if (c < 

128) {
					string += String.fromCharCode(c);
					

i++;
				}
				else if((c > 191) && (c < 224)) {
			

		c2 = utftext.charCodeAt(i+1);
					string += String.fromCharCode

(((c & 31) << 6) | (c2 & 63));
					i += 2;
				}
			

	else {
					c2 = utftext.charCodeAt(i+1);
					

c3 = utftext.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | 

((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			

}
			return string;
		}
	}
	
	function formataNome(conteudo){
		

conteudo = conteudo.replace('?', '');
		conteudo = conteudo.replace('%u2013', '');
		while

(conteudo.match(/--/g)){ conteudo = conteudo.replace("--", "-"); }
		while(conteudo.match(/  /g)){ 

conteudo = conteudo.replace("  ", " "); }
		return conteudo.replace(/^\s+|\s+$/g,"");
	}
	
	

function fTesta(url){
		//var lista_sites = 

['/download/','fileom.com','uploaded','rapidshare','deposit','zshare.net', 'mandamais.com.br', 'fileserve.com', 

'sharingmatrix.com', 'filesonic.com', 'filebox.com', 'qshare.com', 

'zshare.net','filefactory.com','storage.to','filesonic.com','rapidshare.com','megaupload.com','4shared.com','rap

idshare.de','bitroad.net','fileserve.com','flyupload.com','2shared.com','sharingmatrix.com','sharingmatrix','meg

ashares.com','transferbigfiles.com','sharedzilla.com','letitbit.net','vip-file.com','mediafire.com','easy-

share.com','mybloop.com','mandamais.com.br','filesonic','adrive.com','badongo.com','Sendspace.com','rapidshare.r

u','filebase.to','uploadbox.com','depositfiles.com','up-

file.com','hotfile.com','megavideo.com','megaporn.com','uploading.com','kewlshare.com','pyramidfiles.co','pyrami

dfiles','bitshare.com','bitshare','wupload.com','wupload','linkbucks.com','crocko.com','crocko','freakshare.com'

,'freakshare','freakshare.net','uploaded.to','uploaded','ul.to','queenshare.com','queenshare','uploadboost.com',

'filegag.com','jumbofiles.com','jumbofiles','filejungle.com','filejungle','megashare.com','megashare','netload.i

n','netload','bayfiles.com','bayfiles','linkbucks','x7','share-

online.biz','turbobit.net','putlocker.com','rapidgator.net','rapidgator','speedyshare.com','180upload.com','rapi

dgator.net','uptobox.com','muchshare.net.com','project-free-

upload.com','netload.in','muchshare','shareflare.net','upafacil.com','go4up.com','goo.gl','sharefiles','sharefil

es.co','yess.me','yess','linkprotegido.info','linkprotegido','zip.net','zip.net','depositfiles.com','putlocker.c

om','filebox.com','shareflare.net','filereactor.com','jumbofiles.com','filerio.in','sharpfile.com','pigsonic.com

','queenshare.com','filesharehost.com','shareflare.net','fiberupload.com','filegag.com','uploadboost.com','goo.g

l','letitbit.net','muchshare.net','fooget.com','grupload.com','filevelocity.com','crocko.com','shareflare.net','

uploadstation.com','filejungle.com','ul.to','bitshare.com','migre.me','Wupload.com','bit.ly','duckload.com','bit

.ly','uploaded.to','filefactory.com','filesonic.com','4shared.com','shareflare.net','freakshare.net','fileserve.

com','hotfile.com','superfastfile.com','movieshare.in','sharingmatrix.com','oron.com','storage.to','x7.to','zsha

re.net','rapidshare.com','megaupload.com','rapidshare.de','bitroad.net','flyupload.com','2shared.com','megashare

s.com','transferbigfiles.com','sharedzilla.com','letitbit.net','vip-file.com','mediafire.com','easy-

share.com','mybloop.com','mandamais.com.br','adrive.com','badongo.com','Sendspace.com','rapidshare.ru','filebase

.to','uploadbox.com','up-

file.com','uploading.com','biganfree.com','zshare.net','spaceforfiles.com','file4go.com','filesflash.com','teraf

ile.co','open.ge.tt','rusfolder.net','minus.com','torrentsz.in','uppit.com','uploadable.ch','torcache.net','down

2money.net','uploaded.com','filemonkey.in','hulkfile.eu','asfile.com','cdn.anonfiles.com','uptobox.com','rocketf

ile.net','rmsafe.com','hugefiles.net','1fichier.com','fichier.com','zippyshare.com','mega.co.nz','minifying.me',

'gamevicio.com','filesbt.com','dgmg.org','minhateca.com.br','disk.yandex.com','yandex.com','uploaded.net','sites

.google.com','suamusica.com.br','thepiratebay.sx','redirecionando.me','filemarkets.com','babylon.com','musicaspa

rabaixar.org','uplea.com','gigasize.com','filerio.com','u31161121.vip-

file.com','tusfiles.net','fileom.com','putlocker.com','gigabase.com','share4web.com','unibytes.com','filefactory

.com','usefile.com','filerio.in','d01.megashares.com','netkups.com','muchshare.net','rapidshare.com','bitly.com'

,'rapidgator.net','adv.li','ads.tt','depositfiles.org','uploadboost.com','uploadjet.net','netload.in','grupload.

com','queenshare.com','fiberupload.com','holderfile.com','pigsonic.com','mojofile.com','anonfiles.com','sharefla

re.net','crocko.com','uploadboost.com','bayfiles.com','sendmyway.com','file-

upload.net','coraldrive.net','megaupload.com','turbobit.net','bitshare.com','glumbouploads.com','w15.easy-

share.com','adf.ly','file-cadastre-

se.comuf.com','bitshare.net','telaquente.biz','wupload.com','downloadseguro.org','linkeasy.org','zpag.es','rapid

share.de','filejungle.com','uploadstation.com','bitroad.net','wupload.com.br','sharpfile.com','downlivre.org','f

lyupload.com','2shared.com','x4.xclicks.net','megashares.com','transferbigfiles.com','sharedzilla.com','megavide

o.com','jumbofiles.com','x3.xclicks.net','x2.xclicks.net','x5.xclicks.net','temdownloads.netau.net','letitbit.ne

t','goo.gl','sharingmatrix.com','hotfile.com','vip-file.com','mediafire.com','easy-

share.com','baixetudoaki.net','mybloop.com','mandamais.com.br','adrive.com','multiupload.com','box.com','proteto

rdelink.com','uploading.com','filmesdiarios.org','muambeiros.net','fileserve.com','azushare.net','filesonic.com'

,'uploaded.to','upmais.net','fileserve.com','loadbr.info','4shared.com','badongo.com','freakshare.com','assistao

nline.blogspot.com','Sendspace.com','ziddu.com','rapidshare.ru','filebase.to','sharedzilla.com','uploadbox.com',

'baixarfilmeseseries.org','depositfiles.com','indica.celularbr.com','download.vipdownload.com.br','protetordelin

k.tv','zpag.es','sharex.xpg.com.br','vip-

file.com','ul.to','letitbit.net','migre.me','thepiratebay.se','novomp3.com','novomp3.mus.br','klumag.net','eimia

.net','up-file.com','.com'];
		var lista_sites = 

['.3gp','.7z','.aac','.ac3','.asf','.asx','.avi','.bzip','.divx','.doc','.exe','.flv','.gz','.gzip','.iso','.jar

','.jav','.mid','.mkv','.mov','.mp3','.mp4','.mpeg','.mpg','.msi','.nrg','.ogg','.pdf','.ppt','.psd','.rar','.rm

','.rmvb','.rtf','.swf','.tar','.tar.gz','.tgz','.torrent','.ttf','.txt','.wav','.wma','.wmv','.xls','.zip','180

upload','1fichier','1filesharing','2shared','4files','4share','4shared','a2zupload','adf','adrive','amazon','any

files','axifile','badongo','bayfiles','bigandfree','bigupload','bit','bitroad','bitshare','bizhat','bonpoo','box

.com','carbonite','cepzo','cramit','crocko','croko','dataup','depfile','deposit','depositfiles','dimshare','driv

e.google','driveway','dropbox','dropvideo','duckload','easy-

share','easyshare','egnyte','egoshare','enterupload','esnips','extabit','ezyfile','ffuw','file-

rack','file27','filebase','filebeam','filebox','filecoast','fileden','filedropper','filefactory','filefront','fi

legag','filehost','filehosting','filejungle','filemade','fileom','filepost','fileqube','filerio','files','files2

u','filesave','filesavr','filesend','fileserve','filesflash','fileshare','filesline','filesonic','filestube','fi

leswap','filevelocity','filevice','filevicelumfile','filez','filezzz','flameupload','flashx','flyfile','flyuploa

d','fooget','freakshare','freefolder','friendlyfiles','ftp2share','getfile','getthebit','gettyfile','getupload',

'gigasize','gigeshare','go4up','goo','hellshare','hightail','hipfile','hostingbulk','hotfile','hotlinkfiles','hu

lkfile','hulkshare','icefile','icloud','ifile','ifolder','infinitemb','jumbofiles','justcloud','justupit','keep2

share','kewlshare','leteckaposta','letitbit','linkbucks','linkprotegido','lix','loadfiles','loombo','luckshare',

'luckyshare','magnet','mailbigfile','mandamais','mandeibem','mangoshare','mediafire','mega.co','megaftp','megapo

rn','megarotic','megashare','megashares','megaupload','megavideo','midupload','migree','mihd','milledrive','mlfa

t4arab','modovideo','moevideo','movieshare','moviezer','muchshare','multiupload','mybloop','myfreefilehosting','

mystream','myupload','netload','notlong','nowvideo','onefile','onlinedisk','opendrive','oron','oteupload','oxysh

are','pando','paste2','pipebytes','project-free-

upload','putlocker','pyramidfiles','q.gs','qshare','queenshare','quickfilepost','quicksharing','quickupload','ra

pidgator','rapidshare','ryushare','savefile','secureupload','sendspace','sendthisfile','senduit','sexupload','se

xuploader','share-

online','sharedzilla','sharefiles','shareflare','sharejunky','shareua','sharingmatrix','sharpfile','simpleupload

','skydrive','slingfile','sms4file','smsfiles','snaggys','sockshare','soundcloud','speedshare','speedyshare','sp

read-

it','storage','storeandserve','streamfile','streamupload','sugarsync','superfasfile','superfastfile','supload','

swoopshare','tinyupload','tinyurl','torrentz','transferbigfiles','turbobit','turboshare','turboupload','ubuntu',

'ucash','ufliq','ugotfile','ul.to','ultrashare','up-

file','upafacil','upamais','upfile','upitus','uploadboost','uploadbox','uploadcell','uploaded','uploadfile','upl

oading','uploadline','uploadmachine','uploadok','uploadyourfiles','upmirror','uppit','uptobox','usershare','vide

obb','videohex','videoslasher','videoweed','videozer','vidto','vimeo','vip-file','vip-

files','vk.com','vkontakte','webfile','webfilehost','wetransfer','wikisend','wupload','wyslijto','x7','xup','yad

i','yandex','yastorage','yess','yourfilehost','yourfilelink','yousendit','youtube','z-

share','zalil','ziddu','zippyshare','zshare','livrai','mukupload','coolzipextractorapp','arkfy','netkups','cloud

zer','rmsafe','zunay','1fochier','hitfile','seuarquivo','oboom','firedrive','filemonkey','upofiles','loadfiles',

'unibytes','share4web','uplea','k2s','novafile','uploadhero','sendmyway','sharebeast','uploadable','asfile','clo

udshare','suamusica.com.br','zshare.net','spaceforfiles.com','file4go.com','filesflash.com','terafile.co','open.

ge.tt','rusfolder.net','minus.com','torrentsz.in','uppit.com','uploadable.ch','torcache.net','down2money.net','u

ploaded.com','filemonkey.in','hulkfile.eu','asfile.com','cdn.anonfiles.com','uptobox.com','rocketfile.net','rmsa

fe.com','hugefiles.net','1fichier.com','fichier.com','zippyshare.com','mega.co.nz','minifying.me','gamevicio.com

','filesbt.com','dgmg.org','minhateca.com.br','disk.yandex.com','yandex.com','uploaded.net','sites.google.com','

suamusica.com.br','thepiratebay.sx','redirecionando.me','filemarkets.com','babylon.com','musicasparabaixar.org',

'uplea.com','gigasize.com','filerio.com','u31161121.vip-

file.com','tusfiles.net','fileom.com','putlocker.com','gigabase.com','share4web.com','unibytes.com','filefactory

.com','usefile.com','filerio.in','d01.megashares.com','netkups.com','muchshare.net','rapidshare.com','bitly.com'

,'rapidgator.net','adv.li','ads.tt','depositfiles.org','uploadboost.com','uploadjet.net','netload.in','grupload.

com','queenshare.com','fiberupload.com','holderfile.com','pigsonic.com','mojofile.com','anonfiles.com','sharefla

re.net','crocko.com','uploadboost.com','bayfiles.com','sendmyway.com','file-

upload.net','coraldrive.net','megaupload.com','turbobit.net','bitshare.com','glumbouploads.com','w15.easy-

share.com','adf.ly','file-cadastre-

se.comuf.com','bitshare.net','telaquente.biz','wupload.com','downloadseguro.org','linkeasy.org','zpag.es','rapid

share.de','filejungle.com','uploadstation.com','bitroad.net','wupload.com.br','sharpfile.com','downlivre.org','f

lyupload.com','2shared.com','x4.xclicks.net','megashares.com','transferbigfiles.com','sharedzilla.com','megavide

o.com','jumbofiles.com','x3.xclicks.net','x2.xclicks.net','x5.xclicks.net','temdownloads.netau.net','letitbit.ne

t','goo.gl','sharingmatrix.com','hotfile.com','vip-file.com','mediafire.com','easy-

share.com','baixetudoaki.net','mybloop.com','mandamais.com.br','adrive.com','multiupload.com','box.com','proteto

rdelink.com','uploading.com','filmesdiarios.org','muambeiros.net','fileserve.com','azushare.net','filesonic.com'

,'uploaded.to','upmais.net','fileserve.com','loadbr.info','4shared.com','badongo.com','freakshare.com','assistao

nline.blogspot.com','Sendspace.com','ziddu.com','rapidshare.ru','filebase.to','sharedzilla.com','uploadbox.com',

'baixarfilmeseseries.org','depositfiles.com','indica.celularbr.com','download.vipdownload.com.br','protetordelin

k.tv','zpag.es','sharex.xpg.com.br','vip-

file.com','ul.to','letitbit.net','migre.me','thepiratebay.se','novomp3.com','novomp3.mus.br','klumag.net','eimia

.net','up-file.com','.com'];
		var lista_exclusao = ['111'];
		var ok = false;

		for (var 

x=0;x<lista_sites.length;x++) {
			if((url.toLowerCase().indexOf(lista_sites[x]))>0) {
			

	ok = true;
				x = lista_sites.length + 1 ;
			}	
		

}
		if (ok){
			for (var x2=0;x2<lista_exclusao.length;x2++) {
				

if((url.toLowerCase().indexOf(lista_exclusao[x2]))>0) {
					ok = false;
			

	}
			}
		}
		return ok;
	}
	
	function 

fCarregaProtetor(){

		var links = document.getElementsByTagName('a');
		for (var 

i=0;i<links.length;i++) {
			var url = links[i].getAttribute("href");
			

if(url!=null){
				if (fTesta(url)){
			
					

var jsonParametros = {};
					jsonParametros.s = 1158;
				

	jsonParametros.f = 14;
					jsonParametros.n = TITULO;
				

	
					jsonParametros.uo = document.URL;
					

jsonParametros.ud = url;
					jsonParametros.textolink = links[i].innerHTML;
		

			jsonParametros.titulopagina = document.title;
					var key 

= Base64.encode(JSON.stringify(jsonParametros));
					//alert(JSON.stringify

(jsonParametros));
					
					
			

		var lnk = Base64.encode(TITULO + '|' + url);
					lnk = 

'http://deubug.blogspot.com/';
					//alert(lnk);
					

links[i].setAttribute("href",lnk);
				}
			}
		}
	

}
	fCarregaProtetor();
	window.onload = function(){ fCarregaProtetor(); }
})();
