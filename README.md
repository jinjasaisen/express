# express blog samples

- bl1 uses monk

- !=item.body.replace(/\n/g, "\<br />")

  is the code to line breaks.

- example of casting data into a hidden form

\\\

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
\\\