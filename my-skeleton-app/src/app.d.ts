# Aqui estou testando funcionalidade de mostrar despesas e rendas  key: 6982302351:AAHJTi9ZVkd6od6xiNqrXUaSV-D-svXjhAA
# https://huggingface.co/j-hartmann/emotion-english-distilroberta-base  <<--- funciona bem para saber as emocoes
# DeepL sera o tradutor principal,msg pelo telegram bot

from dash import Dash, html,dcc
import plotly.graph_objects as go


# Initialize the app
app = Dash()

def build_link(source,target,value):
  mylist = []
  mylist.append((source,target,value))
  return mylist


# Incorporate data that will be shown on the site
fig = go.Figure(data=[go.Sankey
   
    node : dict
    (
      pad : 15,
      thickness : 20,
      line : dict(color : "black", width : 0.5),
      label : ["Renda ativa", "Renda passiva", "Renda", "ML", "Ubers do dia 15","lanche uf dia 15","venda ingresso","lanche uf dia 5"],
      #             0               1             2       3           4           5                   6                      7
      color : "blue"
    ),
    link : dict (
      source : [0, 1, 0, 2, 3, 3], # indices correspond to labels, eg A1, A2, A1, B1, ...
      target : [2, 3, 3, 4, 4, 5],
      value : [8, 4, 2, 8, 4, 2]
     )                             
]
)
  

PL = go.Figure.data

#Titulo do grafico
fig.update_layout(title_text="P&L de março 2024:", font_size=30)

# App layout
app.layout = html.Div([
     dcc.Graph(figure=fig)
])

# Run the app
app.run_server(debug=True, use_reloader=True) 
