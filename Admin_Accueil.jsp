<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html lang="en">

    <jsp:include page="Head.jsp"/>

<body class="text-center">
    <header class="p-5">
        <h1>Les montres luxueuses</h1>
    </header>
    <jsp:include page="Nav.jsp"/>
    <main>
        <div class="container">
            <h2 class="p-5">Administration</h2>

            <form:form id="modelWatch" name="modelWatch" action="/Projet_Final/Aministration/Ajouter " method="post" modelAttribute="modelWatch" onsubmit="return fnAjouterMontre()" class="form-group mx-auto w-50">
        <p>brandName</p>
        <form:input class="form-control" id="brandName" path="brandName" autocomplete="true" />
        <br>
        <p>modelName</p>
        <form:input class="form-control" id="modelName" path="modelName" autocomplete="true" />
        <br>
        <p>watchPrice</p>
        <form:input class="form-control" id="watchPrice" path="watchPrice" autocomplete="true" />
        <br>
        <p>watchImage</p>
        <form:input class="form-control" id="watchImage" path="watchImage" autocomplete="true" />
        <br>
        <p>watchQuantity</p>
        <form:input class="form-control" id="watchQuantity" path="watchQuantity" autocomplete="true" />
        <br>
        <button type="submit" class="btn btn-success form-control">Ajouter une montre</button>
    </form:form>
        </div>
    </main>
    <footer class="p-4">
        <p>Danny Lachapelle	&copy;</p>
    </footer>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
</body>

</html>