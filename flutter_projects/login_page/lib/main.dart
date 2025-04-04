import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(const MyApp());
}

String? savedUsername;
String? savedPassword;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Login Page',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Login Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _username = '';
  String _password = '';

  void _handleSubmit() {
    if (_username == savedUsername && _password == savedPassword) {
      _launchRickroll();
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Invalid login!')),
      );
    }
  }

  void _handleCreateAccount() {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const CreateAccountPage()),
    );
  }

  Future<void> _launchRickroll() async {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              ClipOval(
                child: Container(width: 100, height: 100, color: Colors.blue),
              ),
              const SizedBox(height: 16),
              TextFormField(
                decoration: const InputDecoration(
                  labelText: 'Username',
                  border: OutlineInputBorder(),
                ),
                onChanged: (value) => setState(() => _username = value),
              ),
              const SizedBox(height: 16),
              TextFormField(
                decoration: const InputDecoration(
                  labelText: 'Password',
                  border: OutlineInputBorder(),
                ),
                obscureText: true,
                onChanged: (value) => setState(() => _password = value),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: _handleSubmit,
                child: const Text('Enter'),
              ),
              const SizedBox(height: 10),
              ElevatedButton(
                onPressed: _handleCreateAccount,
                child: const Text('Create Account'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class CreateAccountPage extends StatefulWidget {
  const CreateAccountPage({super.key});

  @override
  State<CreateAccountPage> createState() => _CreateAccountPageState();
}

class _CreateAccountPageState extends State<CreateAccountPage> {
  String _newUsername = '';
  String _newPassword = '';

  void _handleAccountCreation() {
    savedUsername = _newUsername;
    savedPassword = _newPassword;

    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Account created! Now log in.')),
    );

    Navigator.pop(context); // Go back to login screen
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Create Account')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextFormField(
              decoration: const InputDecoration(
                labelText: 'New Username',
                border: OutlineInputBorder(),
              ),
              onChanged: (value) => _newUsername = value,
            ),
            const SizedBox(height: 16),
            TextFormField(
              decoration: const InputDecoration(
                labelText: 'New Password',
                border: OutlineInputBorder(),
              ),
              obscureText: true,
              onChanged: (value) => _newPassword = value,
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: _handleAccountCreation,
              child: const Text('Create Account'),
            ),
          ],
        ),
      ),
    );
  }
}