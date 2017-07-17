//var url = 'http://'+ip+':8069/jsonrpc';
function ReqLogin(database, username, pass, ip) {
    var url = 'http://' + ip + ':8069/jsonrpc';
    var xhr = new XMLHttpRequest();
    xhr.open('Post', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    var parmsarry = { method: 'login', service: 'common', args: [database, username, pass] };
    var data = { id: 7, method: 'call', params: parmsarry, jsonrpc: '2.0' };

    xhr.send(JSON.stringify(data));
    var datais = xhr.responseText;
    var myobj = JSON.parse(datais);
    return myobj.result;
    //   alert(xhr.responseText);
}

function ReqReadData(userid, database, pass, modelname, fileds, ip , filtter) {
    var url = 'http://' + ip + ':8069/jsonrpc';
    var xhr = new XMLHttpRequest();
    xhr.open('Post', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    var prsamsarry = { method: 'execute', service: 'object', args: [database, userid, pass, modelname, 'read', ReqReadIds(database , userid , pass , modelname, filtter,ip), fileds] };
    var data = { id: 7, method: 'call', params: prsamsarry, jsonrpc: '2.0' };
    xhr.send(JSON.stringify(data));
    // alert(xhr.responseText);
    var datais = xhr.responseText;
    var myobj = JSON.parse(datais);
    return myobj.result;
}

function ReqReadDataVs(userid, database, pass, modelname, ides, fileds, ip) {
    var url = 'http://' + ip + ':8069/jsonrpc';
    var xhr = new XMLHttpRequest();
    xhr.open('Post', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    var prsamsarry = { method: 'execute', service: 'object', args: [database, userid, pass, modelname, 'read', ides, fileds] };
    var data = { id: 7, method: 'call', params: prsamsarry, jsonrpc: '2.0' };
    xhr.send(JSON.stringify(data));
    // alert(xhr.responseText);
    var datais = xhr.responseText;
    var myobj = JSON.parse(datais);
    return myobj.result;
}

function ReqReadIds(database, userid, pass, model, filter, ip) {
    var url = 'http://' + ip + ':8069/jsonrpc';
    var xhr = new XMLHttpRequest();
    xhr.open('Post', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    var prsamsarry = { method: 'execute', service: 'object', args: [database, userid, pass, model, 'search', filter] };
    var data = { id: 7, method: 'call', params: prsamsarry, jsonrpc: '2.0' };
    xhr.send(JSON.stringify(data));
    //var dataafter = JSON.parse(xhr.responseText);
    //alert(dataafter.jsonrpc);
    var datais = xhr.responseText;
    var myobj = JSON.parse(datais);
    return myobj.result;
    // return dataafter.result;
}

function UpdateData(db, uid, pass, model, id, values , ip) {
    var url = 'http://' + ip + ':8069/jsonrpc';
    var xhr = new XMLHttpRequest();
    xhr.open('Post', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    var prsamsarry = { method: 'execute', service: 'object', args: [db, uid, pass, model, 'write', id, values] };
    var data = { id: 7, method: 'call', params: prsamsarry, jsonrpc: '2.0' };
    xhr.send(JSON.stringify(data));
    // alert(xhr.responseText);
    var datais = xhr.responseText;
    var myobj = JSON.parse(datais);
    return myobj.result;
}