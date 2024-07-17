// src/pages/HotelsPage.jsx

const HotelsPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative mb-8 ">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIWFhUXGBgWGBgYGBgXGBcYGBoWHRoXGBgYHSggGh0lHRcYITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0iICU1LS8vLy0tLy0tLS0tLzUtLS0tLS8tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEIQAAEDAgMFBgQEBAQGAgMAAAEAAhEDIQQSMQUiQVFhBhNxgZGhMrHB8BRCUtEjYoLhFTNykhYkQ1Oy8TTSc6Kj/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EADERAAICAQMCAwcDBAMAAAAAAAABAhEDBBIhMUETUaEiYXGBkbHwBRTRFTJS4SOSwf/aAAwDAQACEQMRAD8A8NSSSUIdlOa+ExJQllqg2bq01o5IaDwU2HrEGJsmRklwOhNLgKU2N5KPGYMESAZHAcfv90mPVhlQprVqh7SaoGUMCXAzYgSPqD1VetQc3UHWEfe+IdyN/A2Kr4qCQ03+IewE/NIkqESxpAzANlwET49EYbQYdIPghNWiWOAkaA9INxKJbPrtMNaDe5/fwGiKDrgmN1wx5wLVC7ABEi1cLU3gdSBRwQUjcI3krxpruRVwVtRUGFHJL8MOSt5U0tVEopnDN5KN2CCvhqaWqFUgf+AC7+ACIZVyFVIHaij+CCX4MK6Uwqy9qKv4ULn4cK0QmlWSkVjhwmmgFaTSFCUiq6iFG6kFcIUTmqUU4oqOpqMtVt7VC4IGhcokBC4nkJhS2LOJLq4qIJJJJQh0BJcSUIdSCQSUIEMM5mmb1VxhExKBp2c80xZB0c1LoaMMsRzCANzAyZ4Ep+Frua4EH31RF7ZEnUzrxF9OiXlyKgpe3yivXrscyQDmJuIN4EAzpAHBXNlhwA3QGmTx56AKTDU2ZC0FoJmBIBv/AGsmYTAVmn4oaOBOYHy4Io3dkUXaYRlcUmVchNsdRGAknwmwrKGQmlSFMKoojIXAnlNVFHIXCnJpKhBpCbCc4psqyDXJpTimlWiqGpJErhVlnITSE5NcVCqIXhQPCsOKheULBkiBwUZUryoylMSxqSSSEEQShILrvBQs4V0tSUlOkXWGvT9lCiJcUhbEqNQgkl1cUIdlanZr2vo02uyTOVsagmNeX1lZVSUHEOBbYi4PKEvJDehmOe1hTH1e7quY4A5DGloTWY5v5Q5p/lJj0VPF4h1RznuuTE9eEqPDugz0KpQ4V9RqyvdXYMt2hyqT0cPqFepYxjtHA+x9FnXVQ55dlguJOtrngI+qhKZFte8vxe5rS5RVXwqOH2jmIGXzJ+gCnzTp9+iaskF1YfXoJ1Q8FH3hGqkibAgTx5cz6SpK1FrTmY7M06h0ZtPQi3iOvAMmdR4XJVMjEphJV7EbP7tgeCA19yCSXRq0aATwEnWVRc5VjzKfKI011FmXMyaXJpKdZQ8lNlNzJhcrshISuMaXENaJJMAcyeCiLla2QHd8wtE5SHHhpx+vkgyT2RbIQOkGDromkojRwuasXuqEtzOII1iXc9TwA13mHQqptMtzyLOJJc3gzk0GbwNfFKx6jdLbRdcWVy5NcU2UxxWgFnHuUbl0lRuKFsXJjXqNycSmIGKYkkkkJRxSsvAiTw/ZRwnUyQZGoUIPfScBmLSBpJmFxkQbefJWKTi2oRVEk2Oa8E2mZtrqlSw+YvaCIbcaSdPvohssgrVi65iefE+KhUlZkFMARIjOJLWYbsoO5bWe90EA2YzLJsW5nVBfThoQeIVvFdl2NpB5cATJynJmEaA5XESbwATMLO9VjTqx8dPJqzF06ZcYAJ8FMKL2EFzXAaTEarU1+zbKcl73NDQHSaUyIBzAB0xfkmdodgd1hm1g4lri2N0NieYzE+3oijlU37JUsWxcmW7sgGQR4hcpG63VXs/Sj4xoSP8AMBMcgJXH9nmtaC54phzQ4Zi4AtPGX0y0jwJQLUQkuGH4Mk1wYvDU3Oc1oHOJMDrqn1cDVGrD5QfktfS2KHSKVWmZBBh1B9uMQ4EaDSFbobCxIuAHjSX0i8eRBPzQy1CT4aJ4XFOzIbOpFvxNItxBV8ZYsfktP/hlUDfw9MkcWvfTn+kiAohgHQS7DP1sGmm6BaxMk+fskSzpv/Y2KSVAbC0wXCRmkOMc+UxeAYRDdaHA5AQJIa1rbHkG62m6IDZbRPd1BT6PY9o83FseygrbEq1AHS17RN2OaQZF50SvGjJ8uhm1rocrNpvble02G4AdNbGI/t1lUH7JY7Qlvv8ARE8TsurTj+G5wn8rSYnoJTRTcDL2PA4bpg9DHBaMWSEVUZASUvICVNjOGj2+cj90MrNLTDlrMZUBtMeIy69CEJ2hs+mG5n1C536abSef5tOXqmw1D3VYDXAGzpher79jU3Ma9r3CQDBAcBPoombINx3gIEyb5h/T/daFqId3QNMqUwXOgCSUc2dRfSc0iRJg9dP3jrNp4B8Hs6pXkUhmAMZpgD1v7LY9nthPo1Hd5UghhDzJLRDQ8HM6NOGmqz6vNFKrT9wcISk+nHmZrbG0H0XhjbOAJd0LwbeIB16oGcT0W527sqnU7x4cJdLgSR0gaxEe8rC4ugWuIIiPuUWmyRlHjr3AzwnB32E/EclH3xTsLQzvayYzED1Wio9l23zVDbwbqAeM803JnjD+5gY8WXLzEzRqFNlbTDdnaESbwSNSdDraFPQ2bh2tacoNhO6NeNys8tbDsmzQv0/I+rRhgCVKMHUicjo5wYWy7oNDN3hbTpy6KDeyEACCXdeJsq/dX0QS0K7syJoO5JK9i3Q8hJaFNtCHginVlLCgFwkx4iR5ohTptcC85BGUQ2Tr/KSABaCTa6qUKVN2ri0+EhHPwWHygW01mCfFDkyKPmJjhcujQO/D5qT3DK5zQHEzDg22jePiVJ2cqNFbISMrxEusAQ2TrbWRKsM2Swn+HWynTeg25Bcd2dd+U0zbi4jlcGI9+KW8sGnFstYZrtZS7QUMlUskboGhkH+rj49FV2fWyvFg6bQbiToY5g3VjEbHrtMGk7UAQJBkgAAiZJJ06qTC7BrueWBhDmgO1HleY901TgoctFKE5S4R6V2fwDsraZfkoxul1MANlu9J0BMkSINz5UduZgw4ZjiWscXFxZ3bIAJ3N7eJ0kgm/VD6exdowJ4aS+nYGDGvQa6QqG19lYqk3NWDspIE5s4nrBP2FzlFb7bVm1blGq4NJj3MrMc6Q0TUa4ghxeS0MBDc0/CwCJ4KDtLQY3Z1NjQR/EoM3mZX2YBwJ/QTHVCsLsDEmHtZAsRLmsPoSCqvaDC4ljafel0GqwCagdvb0aOMcUWPbuST9Qcm+naNTVotLhTFUBxkbzS2OF+V415habY+U06bSaRIp02lrswcHENAsy5uQJWCOysQzNUNMwLk5muPjDXEp2ycRioNSkXm8EzbiBr0HDokKEUqQx5JX0Nsyg+mAG5Q5rYkO/lcPzRabeap0sMaWHYyu0NaMUHvzOZGTKQbGb+UrLYilinOBPfA6WBNrW06IiamMqU8gD5AMTTcbxYgkQDrrZT2fMGWadco1H4MOe0UJawuJgVKjSNw2/hkWlvKxso6Qc3E02vD+7/iTnD3tdHwz3hN+UHjxQjstsmq4jvHmXAOzNIBE5gWnMLfD6DmvQKmyIohpxBJmw3I00Ay9M3qlSyJykordXPuBebhKjz7A4yq7uszBDsgJcxjcxJh0BjQR/ZEdiY7vKjMK6ixocXjMAQ8ZXNOrpJnODe3SFd2m6owBjzma17XtBtBbOkaAzHkndmez7yG4mjlF6jmhxlwLyAQSAP0g+XUoceWGW3BegafFvj5g7Fbfa0f/GLwBJeHVJmYI3WQY/bRFKdak6nUeGupmkWZgd4HOBAvEG4meqqY/s9Wp06kAAcw1riOEEkeInrPJV8NSfTpljMM5wqOZmGYQcjhmuDYRcQpN6ZypxS6e7gZF5KtNv1K7sbhyTu1AbSHtZoTAsDJ4KPaGEwwqGm6LWzBj263/L481FjMEQXPFJzgZylxAIDTu6uvF/byfTec7KhbUzDMXENa6Xb+WCLWBbqEcYYpO06XuYdyrn1RHiOx2HyNPetawnIHNqwARfL/ABOMcIVM9jTDjSquIsSQWVOY0aQdSrO08TUfQNJwqA95nB7t9hAm4b+oT9wqNHFMFJ7ACzPUoggZ3CG1MzzmyjqeCe+nsyb59LE7f8qRSw/ZXE4Kp3gqS2RnDmODCCR8RBIab2KvuxziKjCQM8mzmuALdAY+KWsEQb8oVt+08PTdVpOe3IXDKM2bMzfmSOU6HRZx4aagLAGU3PgEE5TGaGxwJj3UpzblL60FH2UlF2UaznENnQtjXh5aiDOisbL2CyqzM8l0vOhIaQCRmsLaW8RZD8U0sDiDMA35x00V/YW1X4ekaQYHEuzTMcAIgg8lpluUPY6i4bd1TDVLYFKizOGXsJ8S2eM368kqeFDi4/DcCBPIBFsPVdUp5qjQwOLRAEEQReZ8BfqieD2XTImRrxIGhiQea5cs0udz5OpGEIrhUjLUMKSPiiZI80qeFOQTGk28Oq0zMDSbTkkDdtLiJtpcqWthaAY6MhIafzSTbxPRC83IxRVGNdhJyC9m/wD1HAeKts2awUGl3xF51cdM1QaTHAKXF0BMtZIAOg6jp0KfWxIFJje6uGj8l5N7mJOqJzk0qK2RvkwOPw/8R0AR/YJKxjcLVNRxDTE20C6uxGXsrk5ko8vgzrHkaFF69c5MOS78juAN+9q8CEHARzbOCFLLS7xj3UxG4ZBzlz5nQRMeafNK0c2F80Gdnd29v8RrJBaPhAzEuAgQ2Lz7IrsvZdHI9zqQzNbWsS74qWlpESOHpCyey+0FXDyWWtEjWbWs4QNb3153RrB9pKjmvJhpcTpTtNRp3cz3gXb04WXPzYcvO37mzDNXywLh9vlkfGDmkhrsrYM7o4rc4J4c5rwIzUXvF9JbQd631WPq7L7zea2i0D4i98SeOmtiLo1snaQ7xtOWgMoupkyLvy02wL3G6LoNVCMo3DtdjNOnB+2+vQ7tB+bFOb3lRrZcYYSBZzwQBIHEazoPODaFZwoVaRcX5XsIe6zodG6bmdESxWGq95nZTIYXPjfkEuJ35DZANzFwJVDatE/h6tRwy7zG3OuV5Ejpx8EMH/alXby62OcFTffk01Hb7KAo03gkOaXEAHNBG5lgHiDJjQDxQXtxjXPbRDwGkYhhAAOgaTMmOBB0vPqzEYGpVdhK1Oo5uWk3QiJABIk2BIMX6IT2wq1GmmX1HOl7XXFPUNE/AATExfopp8cN0a68g5pS2O+nBvMVtNwJpSC17aokNMhzG3nkJJHWyq9kMQ0UXZycje8eTEnUDUuH2QhdQ1soeyobnenuiMpdvCSP0ZjaFU2M97qWem50NeSQO7Gm9Euvc5RxHTVLWOO2uxcrs9F2oylSy5XOzRDhBdBI13W2EShGOxDm18wLi1opTEwJqmdAbkW/dZSviazntZUccuZ05qtKLEATDZjjbmmUS+k2qe/pEugZRVmYcSDvRp48UMNNGMrsm5uJpa1d3e4mm18ZZcDJEnM4kbsTaSj1PHVKbadNrmw4Pebb240GReSZ4ryvbO16mYmi+HOy5sn+mSJ0gExbkrLO0ddzm52FzgBq0wL/AJSHAw6Ij901aSTprp5GaU43TVm+xjcsPGJLs9jTbdsmQZ1HDjyKvbKe4UaZa90d2IZTcQQ6Zc6ALXIHnwlec4XHYl1YOgludtv5Q68iSJ8J0RinWxUltKi7UZXDJJaQARDz0I6yEmeLZJU0vmHDmPQ9MxNRpFEmqSwUyagkyXZWQXQJBG+YPG0IJSrtpwCXuEiQCwN6iSBBseKrVaOJfR/yiXw3dz0w4aSPiABseJH0ps2BWqU4LCx1wDnbUJk3Lt8yemlhos8skZvdLb6MKMZRVINYttJ5aWVMrXEyS1thNxmgkQeB/eGUmUqbHONKAHGCTmDhaXWADdYjWyBP2FiO8ZkDgADIllydSJcI97cJhQu2LXDd6o4kEES5gAIEHNvXnXgpLwpKtyr4tfZhqOQFbd24GksAe0TAe1wIgGIIeCD93VPCdpHU2bzQ9t5JAaTAjQHXhMxbgreI7OSHZ6mbMZk1GQDaTZwmY58VVr9mWE/EG6boqgCbxo1xHA2Pkt2PHp3DbV/n1Kk8123+fYjqY4Yk5fwrN4WN2ENFyZBBGk35+oLC7TYxopBpgVQ9omYvoTynhfjqtHR2NXdVc5tZmYS5xGb4WtIILGtE2LTEn2uCd2bfMsqTE/E2o0SR1YtWOGNeyk6+ZnnLI+W16ALEbUzMjLB48okFaZmBb3dGq5zn95ByNaMzRlDtXWLRICHVOyNW0Pog8u8+c6IjS2Ji6LBTHdPkSC52gc3rraFrlBbHS+4mM2p+0/samhtylmDHbusZiJAIDhoIuTGvBEsKxuJdkoTMTmpuAcCCbRy09eixx2XXL3ucI3dGEuAMDecT1PDgjfYl+IouLm0XOqZY3SHGwubgACJtBtK4ubR7VuV3wdRauT4VchTa9OpSaWufmIMXLGEc5uPOQqODqt7p1VxYKkgBjqhIIHTNA8gs9talXrPe+oyCXOsXNdLZJAGUbto4oa6hUEvNMCCDEb1hE8RJ8VIaP2ak1+difuJdaCf+OPrVWzSyTDJZUtEnhlubotXxVYtJEGx/zMgcOpyfUnRZHE4Jzt7K9rTfLAL5i0c2k9dCh9cPa+aVKoIEGZImdbiI6LQ9JCVKNL8+IL1Mo8v89Api9qua9wNYAzcW1NzwXEJ2iZqvIpmJ4sP9/vloktccEKX+jLLNO3yB5UlV4MBrYjW5M+uijCeAtZz0rCOy6FJwJqH4cpiQJGcB3CTumdZ3T5GtjbQYxwiQJaSLES1j2WJvGVw9Oqy7VPRck5ce9NM14pbWjUN2nTzOOTU9ddJiYiIV+liqDoBo0yeO7YnwdqsVm6ohsouc4ZRr6HwssuTTKuGzRHNybP8AD4bKJw1L/Y0e4CoYpmHa0juaRPA5G26GwlF8L2drvY1wyAEa3sOoIF1zaHZPLSe5+IALRO60H1B/dIw6XLKSVv6kyZ4Ri26AFbA0KwYMvd//AIwG26iIPC8TZQbS7PUKY3TUcZ4mB7LXbD2Fhu7D3F7oNyTlmwix+iK4zZuzzBc2m0AgmznO05AD5rdj0ebxNm+vUyZNVj8PxNt/IwB2JhAIyk2n4zy5Aoj2bYwQ2lRztLr5QajptNiTNuAXqD9nYIiWkst+UNH/AJSqezcPQp71OtUs4kHdES2IgNATn+mTlB7pt/X+TN/UoKaSikA9qbNdTFJ9JoDXHfPdlpDbXAIHM8FUdg3OqmmyoXEim4Akcaha63G2U+ZWj2rXDgGOqOAbwJ9zJQ+pTD6odRYGzoZ4NkxN+qVD9KlBW0mO/qWNukzGbSwtYVqtMEHuucX4Wt5qwzs/Vmlm7uKjZ0AiGgm+XqfGEUo7Pqd/WLSC90mCOGaeE+GnmtVgdlVO6FWo0jLMB036NMDx1TMzjhpbV/193wE48ni23J/X3mM2fsQ0ZdWG5IIDZIeJOu9IHotPhdn0e7Y/PUa17cwg3aSBAB4XB4oLittOmpSeDlygNMGZBBgD9+XgtP2br0fw9MFsvDGmLyBeCREgGDBiLpeql/xpuC+S7DNNTm6m38WEtp7Ks0Gq7M6nJP5nEBsgkeKztPYuYsY178sxGkiZhxF4tr1Vra/aSxyXqDcbNzv7tiJJ1jTXqqGzNqvPwloDXhrnTA3rG5BExPK/qsMNE5Lck1ybfHjHhyQR/wAJo5qbXvJytLSeRcXmNL6hvhCdT2XhjRyOpgOaYG9ciZzWPIn0WTxPaEklrTBkAZSd4k2I581LsvbVQFrTUdoZJ0EDhBudP7rfH9MyuJklrsN8shxmEZTzf8vSc2dSJ8yHSp8DjyCBSptYDIGXK2/9Np8lW2xSeKLDJAe5xvOjSBzM69PdS7MoOZSFQzIqNHQjKDBvpK2rRNRu7fzMv7uLnXYIf47Wa94dmkhzYJJMvByxE3uEKHaAwMxvJ8hBViq8s/iuuS93C5OQRbgJ8fNZI4dwMx803Fo2+oGXWRjW3kLYja7TMxoPX0RvaG1KTm0WjLmygOjWzWNM+YKwT8OeSutw7iKbi4zJ4+HOybPBti0Bh1DlOzaPwTJJJO8OfAlsA+/otB2OwwpVXEuJBYZvpum5nVYKrjnNynoBy0U1HtI9ok3Mc7aaxr78FyJwytfnY7LWKQX29s9zCXNrObmMwCCOP3qqtShXFDOMVq4j8w08HdVR2vtw1okxpqSfmqdXGboabtmdRx8fBOwZXGKUk/qxWXTqTbjX0CGCw+IcSM9E24sY4+MuaSfVOxezMRw7g2/7VIH1DQg9DaJDiAYvHyT8djHiZd6yOfRaHmg5cxdfERHTTrqr+AKxOxcfmdkzZZtvcEkIq4+pJ3z6riZ4Wl/xYpy1V/3L1BAU2cQoU4FZasZGVEjAXGACTyFz6K5TwB/6lRrOk5nf7W6ecKoMQ7LlBIHIWnxjXzXWhxF
          p+itbV2sCUpPvQYYzDNiGF55uMD/aPqrNPbTmwGBrAP0gBZt9Q6SmBh4A+ibHK10QiWnUncm38T07ZfarMxtN9WMs7xyWBsGyZaDqeZVXbWPc5haC68TE5b8N2x8//Q/si4Gi4yGlpvzMCcxJiwH6iAAiu1cX3jHO3nkRLu7EAtIgioYEbosC7jcrApJ5uVSs6ST8PrfAR2GDh6cvymbwQTlkcxcn2uddVW2ntpzwQymA2149CeSrYbaneNbngXAvdsjhFtbaojhKjGYZzDlzkOa0SZdMjfAva5GgXoYRxx5xxPPZZ5ZOsjZd/wAUeBAcQIANhy6i3Kyq0DUcC1jnybgiB7gWVD4TAJJPG8X4+qvVcSKdOk8Rne55dxIiBEA246jn0WlpLojMk38hV6haYNMh0XcN4HrYp+Hz5S43EtbYkAF8wDoRoR93ioYwioHVTOUyQAAfl4W4x1U2FxLXUX03HV7X6Abom2vCdIVS3UUox+5Hs2m8VWvk/p11BmIvbxF+q3oxoNJtM5WPful2W/iSD8gvPcUY3QePNSUKpaWEgnJJG9a9yAI5nr5rLqNJHK7rkZhzyxvrwdx+NYWC+Z5cMxytkXOl8wsBbx0uudm6kVe9qOll/wCYA3EHM119OMjwkK/2ZwrDmbUE7xIuR8UcQZNuEqz2hw7aVAupNDTaCZMGYsHEgakeaStO0tpp/dwTszmIwkS4PEEg2DTB5kyOPCIRSq2kyg6mYOd8gOdf4YBBE5j1Hmsni9oVLZj4Wj1iAVVq4jN08LT4wmvHJvllxnFJ0uoYrd2xwDdQRrHA6SEqNeHF7QNZyg6eHFBmPIFlbbU/hhsfmzT4iI+XotMUZnE0/wDxAX5QTlyggAGBfWxGqZS2gdMz9dbf3WdZV4GZ++CmbXLTqmRhFdEU231NPSotcJEkTqT9JUjsLTI0Cz1LaccfvzVlu0+PylFwXYWfsXNpHomP7OutBPsVHhttAan1/YInR2yOfmfqAqasJNdgFjeztQxfSeiE19hVRZegt2k08R8l11ak7WEHhw8ipZ5rm2eX4jA1Rw0Kp1abwbjivU61CkeSGY/DUGtLnPa0C5mB7oHp8fkXH9QyXVnnuHJ7xvMub/5BENvujMdLD3H91W2ztqgCW0WZj+syB4gan2QrE131zme4AACSYi06QPYLm55Ycck48na03jTi93ANe8T/AGXE/c5n0SSf3MvIPwl5ibgzxcweLx8hJUrcJTHxVh/S1zvc5QntoUBq97j/ACtDfd0/JWBUpN+GgPF7nO9hA9kzw1+c/YySyPtf0r7jKTaAi1Rx6uYwHyAcVco4UuJyYSRwLg8jhxe4M9lawZxTmzSpljebWtpN/wB0Ae6dUwv/AHsS3+nNVM/+PumLH+UIlkd/7/gjZh6o/wCpRo/6cpd//EH5qljMLSuXVatR55ANE+ZJPoEUBwzB8D6h4ZnZR6Mv7q7gq1dw/wCWoNbP/aYG6c6hE+rkfhpi/Fa5X8evUr9lGvoklzajGFrvia6wABLhYTprI1GuiEVTcgNJaTYTn9obB6gI4dignNia45lrP4jx/V8IPmVRr1KYfloMdEgAnecekjieXVIlpop2x8dbJcRKRcRAEA3sJzec/YRHZlR+V4a97SWwAGGHOFwMx0Fvvg4McJFRpm1iOI5g9JCuU6VI2FMi5+E5OV91wR48Si+rQE9amqcSXCUqxgOOZzhAAEnyDRJ+iK7S2fUYKb6sNJmGjXdg75FpM8JsNVp9jYVjKbSGw5zBJJLnGwMFxJMSTaYEqp2upEsZH6nXmADAt7LpwfRHMeRN0Zio4udGTXS3DiF2lUeyQAANeJ8Ha6gfNXqBIBaXxaWkXvyH3xKioUs5u43uLeqcUVqeHzCTltx4efRWKVEtMmCfXyJPsVc7x40kRYG0dQ7n4rmY8XRPA6eCopkmz8QKZLwBJsQeY4e/BM2rjm1m5HSB0GsHmnFzeJ6T9D+/2aVd5FwJ8frw80O1dQe9gnH4NhyBr53gDzANp6q5iexNUfCXQYixcOFxk3uPFo81yo2YkAHM3xs4eq9QwlLdafDTxZwSc/BoxZWuDyDFdma1NhqSYbcy0tEf1Q6eUAqCnUc2ARI6rfdriBh3g2loE+Iby8/ZYxtdkQQbC0/urxdApZHPsQOLXaSPvmmukf3TqrAmB0aD1TShhCaQRxTyfsf2SaCVCEGZw6LrcU8cSrIpjx+/vRJ7WgS8ho5n9+PgpRad9iNu0Kn6ipztOoBLnwOth6oPi9qtFqTfN1h5N1PnCFYjEF13OJ8foBYLNl1cIcdWaceklPrwHcT2oc2zCT1MgeQ1PsgOO2lUqnfcXHqfkNAq744pBnELnZdXOfuRvxaWEHwuS2MIaYD6zcoNw02c4SbhusWNzAVXE4gu6DgOX7pj2k3N+qblKyJc2zS5OqQ1JJJGKDmE/DiHZXv6Eho//W/urY2rk/ymMp9WtBd/vdJWbo1S029FotnbVw7QIojPzqHMPIafJbseTdxdGLLia55Z2g3EYg7oe+eJ0H9RsERGyKbf83ENHNtPfcfPQKDF7Qq1BDnHLwAs0eAFkzZ+BqVjDGlw56NHi42TVHnzMzb7cFmniqFH/Lo5ncH1TnPk0brT6pV9oV8Q4Ml7zwa3l/paIjyV0bNw9K9ernd/26Wng55+kFdrbc7tpZQY2k0k3Z8R/wBTtTy8kVV1YtyXxY6jsnu2kYqoKdgcjIdUMzr+VunElS4fHMp//FpNpxYvdvVCP9R08Bog2Fo1K78rGueeIF4nif0jqUeZhKWFH8aKtUf9MXpsPDO6JeemnTiiXQGV15EFDZ1Wue8O5T1NV5kdSOLz4WPNMr02NJax+YCwJEE+Sg2ltWpXdLjPITAHgOARLY+xw9gq1SRT4CYdU/0nVrP5tTw6xR3PgU4/I2GzaobQY5xjcA8XZW2HuqWLxQrDfALWukN5RaZ8Pmqf41gaWiA1tgGiA0NIIDRyiFUr4mHEC4PH2/ZaIxoDalyEMVRYBaxF2/fqh5xE6eI6H7+qgfUkZibix+v0PgnNp8vEfX76pqLHNe4nobHSzhx++ikc0nXTiPqnUWeQNiOR+7eQVgMv1HuD/wCvZWhWSe0rd15n5hNLPv6FXe5J08un3dJ2G5+Y/bmr4MrzSfQHdyDz/b9wths3bdMUwHkgiJiZ/Le3gVm30iP3UTmffJBPGpoGGeUZWXO1GNbVp5acukibEREc/CFk/wAMR9/cI6xxm3HnoU2rhgb8eI5eSBQUTbiyNgHu+Q+/vkl3R4+33fyRV+Hk2F/QeR+/qqGMxNKkYe8T+kXJ8Wjj1VmqKcuhC2ny+/NcrwwZqjg0ek9I1Kp4jazj/ltyD9T7u8mD6oRXxIkuJL3fqO8fIflHglT1EIj4advqEcVtkAbggfqd9Ga+qEjENe6aj3TwJ4+ejR5KpVM3PHzUZECTx4T9wubl1U5M6OLBGPQlxOXg6T6geargrhK6FlbvkehBOPRJz5XAFQQ5pK6TKTb62XHeyoPsdyDguKOUldAbl5DV1cXVYsmoYpzCC06XgwR5g2KMntPVeA2pdvJu6PQIAkmwzTjwmLnihPqjRUto0zq6PER8kZ2bgadQd5UrNDP0sIdUd0t8Pz8FhQVLn6eYWiGqXdCHpF1i6PRK+1sg7ugzuqf6W2c7q52pJQatVJ1+/wBys3Sxzxo9485V7BbbqMdmDmEiQM7BaeIjj1TlmhJ8szvRyTtuzb7H2CGgVcSOraR1P81TkP5fXkru0NqZ8h4204AtNugWNHais6XPbTdJkmSD7ldb2gIAzUDAjR4+UJ8cmNdxUtPlfYPtqOJPkb+n0TmN3QSTax+R/fyQUdoWAyaVQWjQHn16pze0FK8060TxaOP9SYpx80LenyeRpKIbJAvI4eYP0Xe7cRYwW8oJPra4hAKXaik2JZVtb4W//bwUn/FVOZFKtcAfCOE9Ue+PmU8OTyNJhcOwcJkSC4kn36fJTt15ke4+/cLKHtRHw4eprbMQ2+vIrv8AxdVkf8u0cpqD9uivxIpdTJk0mab6eq/k2zG8/hPseHqpcvW/zH393WAq9sMR8IGHaDP63H5qpiO02JJE4kCf0Um+kkSkyyx8x8NDLvXr/B6JUp6/pOvQ8UJx+IpUjv1GtP8AM4AnyKwOJ2nUed+tWcDwL8rZ8B92VMVGtPwtA5kZo9Uv91GIz+mKXV/T8/8ADY4jtJQ/IH1OeVpgHxMR4qjiu0VW0U2U72L3ZvZvHxQD/EALF7iOA0jpbgonYwCYbY8ws+TXy7G7T/pmOK4X1L+N2hUfPe1nkHgP4bfAgXKour5Phys6gXPmo24dxIzuDGk6u4f06n0VdwpC8uf0G7ebXvw4QPFZZaqUjZ+129SR+J8zzv8AU/RVqtYnWB4Jj6k6CByCaAlOTfUNRiuh0uTV1IKixALqSWihaOpNbK4BxTiVRa94jomEpZkpUKbs5KS4krBEkkkoQ6kkkoQ7CUpJKFiXUklC0OzLoekkoSzveHmfUrvfHmfUpJK02RpUdOIPEn1TvxJtc+pSSRb5eZVLyHuxYMa+ZPVNdWbqBxSSV+JIrajjsRyb7n6JOxBPBvPj9SkkheSTCUEWTQeRmc9rBYjU+EBoPumCkzKHPqk82hpseRJMegKSSSpSkuWaJY4x6LsQuqMGjSdZJOvkNFJhsW5klgaLEaZiJkWnTxSSRUKUmMYBMm/3yTnAckkkLHxXBWexMXEkaM01TOwkEklYIpXQOJSSVFoS4VxJWRiXEklARJJJKEP/2Q=="
          alt="Explore Hotels"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-start p-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Find Your Perfect Hotel</h1>
          <p className="text-lg text-white mb-4 drop-shadow-lg">Search for hotels based on your preferences.</p>
        </div>
      </section>

      {/* Search Form */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Search Hotels</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input type="text" className="w-full border rounded py-2 px-3 text-gray-700" placeholder="City or Hotel Name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Check-in Date</label>
              <input type="date" className="w-full border rounded py-2 px-3 text-gray-700" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Check-out Date</label>
              <input type="date" className="w-full border rounded py-2 px-3 text-gray-700" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Number of Rooms</label>
              <select className="w-full border rounded py-2 px-3 text-gray-700">
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4">4 Rooms</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Pet-friendly</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Breakfast Included</label>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
                Search Hotels
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Why Book Hotels Section */}
      <section className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">Why Book Hotels with Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Exclusive deals and discounts on top-rated hotels.</li>
          <li>Wide selection of accommodations tailored to your preferences.</li>
          <li>Secure and easy booking process with instant confirmation.</li>
          <li>24/7 customer support to assist you with your bookings.</li>
          <li>Flexible cancellation policies for peace of mind.</li>
        </ul>
      </section>

      {/* Hotel Listings Section */}
      <section>
        <h2 className="text-4xl font-bold mb-6">Featured Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdlp6w-4I3a-ReQSDZMm9E6Kw2XOQY6Oyfw&s"
                alt={'Hotel'}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Serena</h3>
                <p className="text-gray-600 mb-1">Location: Embakasi East, nairobi</p>
                <p className="text-gray-500 mb-2">Amenities: Free Wi-Fi, Breakfast, Pool</p>
                <p className="text-blue-600 text-lg font-bold">From <span className="text-xl">$500</span> per night</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://www.kempinski.com/var/site/storage/images/9/6/3/2/382369-1-eng-GB/b1faf75c25f1-74460908_4K.jpg"
                alt={'Hotel'}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Villa Rosa Kempisky</h3>
                <p className="text-gray-600 mb-1">Location: Westlands, Kenya</p>
                <p className="text-gray-500 mb-2">Amenities: Free Wi-Fi, Breakfast, Pool</p>
                <p className="text-blue-600 text-lg font-bold">From <span className="text-xl">$1000</span> per night</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/211506292.jpg?k=f11aa5beb95bc968d916f9972ed1e1cad46256bc501c369172b8ca3a4f444cd4&o="
                alt={'Hotel'}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Sarova Hotels</h3>
                <p className="text-gray-600 mb-1">Location: Nairobi Outering Road, Kenya</p>
                <p className="text-gray-500 mb-2">Amenities: Free Wi-Fi, Breakfast, Pool</p>
                <p className="text-blue-600 text-lg font-bold">From <span className="text-xl">$550</span> per night</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default HotelsPage;
