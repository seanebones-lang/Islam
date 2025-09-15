//
//  IslamicLearningCompanionApp.swift
//  Islamic Learning Companion
//
//  Created by Sean McDonnell on 9/14/25.
//

import SwiftUI

@main
struct IslamicLearningCompanionApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "book.closed")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Islamic Learning Companion")
                .font(.title)
                .fontWeight(.bold)
            Text("Welcome to your Islamic learning journey")
                .font(.subheadline)
                .foregroundColor(.secondary)
        }
        .padding()
    }
}

#Preview {
    ContentView()
}

