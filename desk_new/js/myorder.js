var desk_rule = '8;8;8;6;8;2;';
desk_rule = desk_rule.substring(0, desk_rule.length - 1);
desk_rule = desk_rule.split(';');
console.log(desk_rule);

function initDesk() {
    var all_desk = '';
    var index = null;
    for (i = 0; i < desk_rule.length; i++) {
        //var dest_ul = "<ul class=\"desk-ul\">";
        var start = i * parseInt(desk_rule[i]);
        var end = (i + 1) * parseInt(desk_rule[i]);
        index = end;
        console.log(start, end);
        for (start;start < end;start++){
            console.log(start)
        }
            //all_desk += dest_ul + '</ul>';
            //console.log(dest_ul + '</ul>');

    }
    return all_desk
}

initDesk();
