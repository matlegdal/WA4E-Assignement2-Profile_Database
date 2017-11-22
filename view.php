<?php
session_start();
require_once 'modules/pdo.php';
require_once 'modules/util.php';

if (!isset($_GET['profile_id'])) {
	$_SESSION['error'] = 'The profile you requested is not found.';
	header('Location: index.php');
	return;
}

$query = $pdo->prepare("SELECT * FROM profiles WHERE profile_id = :profile_id");
$query->execute(array(':profile_id' => $_GET['profile_id']));
$profile = $query->fetch(PDO::FETCH_ASSOC);

$query = $pdo->prepare("SELECT * FROM positions WHERE profile_id = :profile_id");
$query->execute(array(':profile_id' => $_GET['profile_id']));
$positions = $query->fetchAll(PDO::FETCH_ASSOC);

if ($profile === false) {
	$_SESSION['error'] = 'The profile you requested is not found.';
	header('Location: index.php');
	return;
}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Show a Profile - <?= htmlentities($profile['first_name']).' '.htmlentities($profile['last_name']) ?></title>
	<?php require 'partials/headers.php'; ?>
</head>
<body>
	<?php require 'partials/navbar.php'; ?>
	<div class="container" style="margin: 2em">
		<?=flash()?>
		<div class="card">
			<h1 class="card-header">Profile - <?= htmlentities($profile['first_name']).' '.htmlentities($profile['last_name']) ?></h1>
			<div class="card-body">
				<p class="card-text">First name: <?= htmlentities($profile['first_name'])?></p>
				<p class="card-text">Last name: <?= htmlentities($profile['last_name'])?></p>
				<p class="card-text">Email: <?= htmlentities($profile['email'])?></p>
				<p class="card-text">Headline: <?= htmlentities($profile['headline'])?></p>
				<p class="card-text">Summary: <?= htmlentities($profile['summary'])?></p>
				<h4>Positions:</h4>
				
				<?php
					if (count($positions) == 0) {
						echo "<p>No position yet</p>";
					} else {
						echo "<ul>";
						foreach ($positions as $position) {
							echo "<li>";
							echo $position['year'];
							echo " - ";
							echo $position['description'];
							echo "</li>";
						}
						echo "</ul>";
					}
				?>
			</div>
		</div>
		<a class="btn btn-primary" href="index.php" style="margin: 1em">Done</a>
	</div>
</body>
</html>