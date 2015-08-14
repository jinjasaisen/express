## express blog samples

### bl1 uses monk

-  line breaks in the post body
```jade
- !=item.body.replace(/\n/g, "\<br />")
```


- example of casting data into a hidden form


```jade
   ul
    - each i in list
     br
     form(name="article",method="post",action="/art_post")
      input(type="hidden", placeholder="title", name="title",value=i.title)
      button(type="submit") 
       =i.title
      div.label.label-lg
       a(href=i.term)
        =i.term
```

- monk findAndModify

```javascript

col.findAndModify({ 
query :{"title" : rTitle},
update :{$set:{
"term":rTerm,
"body":rBody
}},
"options": { "new": true, "upsert": true }
    }, function (err) {
        if (err) {
throw err;
        }
    });

```

- monk update()

```javascript
col.update( 
{"title": rTitle},
{$set:{
"term":rTerm,
"body":rBody
}},
function (err) {
        if (err) {
throw err;
        }
    });

res.render("up_fin",{pagename:"update fin",
title:rTitle
});

```
