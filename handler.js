<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <title>Promedio de 3 notas</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <script>
 
function algoritmo()
{
    let nota_1, nota_2, nota_3, promedio;
    nota_1 = parseFloat (document.formulario1.nota_1.value);
    nota_2 = parseFloat (document.formulario1.nota_2.value);
    nota_3 = parseFloat (document.formulario1.nota_3.value);
    promedio=(nota_1+nota_2+nota_3)/3;
    if(promedio<7)
        alert('Reporbado');
    else
        alert('Aprobado');
    document.formulario1.promedio.value = promedio;
}
 
        </script>
    </head>
    <body>
        <form name="formulario1">
            <table style="text-align: left; margin-left: auto; margin-right: auto;">
                <tbody>
                    <tr>
                        <td>
                            <label for="nota_1">Ingresa el valor de nota 1:</label>
                        </td>
                        <td>
                            <input name="nota_1" required="required" step="0.000001" type="number" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="nota_2">Ingresa el valor de nota 2:</label>
                        </td>
                        <td>
                            <input name="nota_2" required="required" step="0.000001" type="number" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="nota_3">Ingresa el valor de nota 3:</label>
                        </td>
                        <td>
                            <input name="nota_3" required="required" step="0.000001" type="number" />
                        </td>
                    </tr>
                    <tr align="center">
                        <td colspan="2" rowspan="1">
                            <input value="Procesar" type="button" onclick="algoritmo();" />
                            <input type="reset" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="promedio">Valor de promedio:</label>
                        </td>
                        <td>
                            <input name="promedio" step="0.000001" type="number" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </body>
</html>
