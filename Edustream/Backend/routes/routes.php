use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:api')->get('/user', [AuthController::class, 'me']);
Route::middleware('auth:api')->get('/dashboard', [DashboardController::class, 'getData']);
